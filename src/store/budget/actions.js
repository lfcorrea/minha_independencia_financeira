import axios from 'axios'

const baseUrl = 'http://localhost:3000/'

export async function fetchBudget ({ commit }) {
  // const response = await axios.get(baseUrl + 'budget')
  // commit('setBudget', response.data)

  axios
    .all([
      axios.get(baseUrl + 'categories'),
      axios.get(baseUrl + 'sections'),
      axios.get(baseUrl + 'entries')
    ])
    .then(
      axios.spread((categories, sections, entries) => {
        const cats = processor.processCategories(categories, sections, entries)
        commit('setBudget', cats)
        // const incomes = processor.processIncomes(incomes.data, categoriesGroups.data)
        // processor.processOutcomes(outcomes.data, categoriesGroups.data)
        // processor.processInvestiments(investiments.data, categoriesGroups.data)
      })
    )
}

const processor = {
  processCategories (categories, sections, entries) {
    const incomeSection = sections.data.find(
      element => element.description === 'Receitas'
    )
    const outcomeSection = sections.data.find(
      element => element.description === 'Despesas'
    )
    const investimentSection = sections.data.find(
      element => element.description === 'Investimentos'
    )

    entries = entries.data

    let incSections = this._processSection(incomeSection, categories)
    incSections = incSections.map(incSection => {
      return this._processSectionEntries(incSection, entries.filter(entry => entry.categoryId === incSection.id))
    })
    const incHeaders = this._getIncomeHeaders(
      incSections,
      categories.length + 1
    )
    const incFooters = this._getIncomeFooters(
      incSections,
      categories.length + 2
    )
    incSections = [...incHeaders, ...incSections, ...incFooters]

    let outSections = this._processSection(outcomeSection, categories)
    const outHeaders = this._getOutcomeHeaders(
      outSections,
      categories.length + 3
    )
    const outFooters = this._getOutcomeFooters(
      outSections,
      categories.length + 5
    )
    outSections = [...outHeaders, ...outSections, ...outFooters]

    const investSections = this._processSection(investimentSection, categories)
    const investHeaders = []
    const investFooters = []

    // Return
    const output = [
      ...incSections,
      ...outSections,
      ...investHeaders,
      ...investSections,
      ...investFooters
    ]
    return output
  },

  _processSectionEntries (incSection, entries) {
    // TODO: Filter by Year
    entries.forEach(function (element) {
      const month = this.getMonthName(element.date)
      incSection[month] = parseFloat(incSection[month]) + parseFloat(element.value)
    }.bind(this))
    return incSection
  },
  _groupBy (items, key) {
    const reducer = function (acc, currValue) {
      return { ...acc, [currValue[key]]: currValue }
    }

    return items.reduce(reducer)
  },

  _getIncomeHeaders (incomes, id) {
    let output = {
      id: id,
      description: 'RENDA FAMILIAR TOTAL',
      order: '0',
      parentId: '',
      userId: '',
      rank: '',
      meaning: '',
      class: '',
      rowClass: 'group'
    }
    output = Object.assign(output, this.getDefaultValues())
    // TODO: Calculate the values based on the incomes
    return [output]
  },

  _getIncomeFooters (incomes, id) {
    return []
  },

  _getOutcomeHeaders (outcomes, id) {
    let sumup = {
      id: id,
      description: 'DESPESAS (FIXAS + VARIÁVEIS) FAMILIAR TOTAL',
      order: '3',
      parentId: '',
      userId: '',
      rank: '',
      meaning: '',
      class: '',
      rowClass: 'group'
    }
    sumup = Object.assign(sumup, this.getDefaultValues())

    let inflation = {
      id: 1 + id,
      description: 'INFLAÇÃO FAMILIAR NO ANO',
      order: '4',
      parentId: '',
      userId: '',
      rank: '',
      meaning: '',
      class: 'level-category',
      rowClass: 'highlight'
    }
    inflation = Object.assign(inflation, this.getDefaultValues())
    // TODO: Calculate the values based on the outcomes
    return [sumup, inflation]
  },

  _getOutcomeFooters (incomes, id) {
    return []
  },

  _processSection (section, categories) {
    let sections = categories.data.filter(cat => cat.sectionId === section.id)
    sections = sections.map(sec => Object.assign(sec, this.getDefaultValues()))

    // Process levels
    sections = this._addLevelInfo(sections, 0, '')

    return sections
  },
  _addLevelInfo (sections, level, baseId) {
    let secs = sections.filter(sec => sec.parentId === baseId)
    let output = []
    const size = secs.length
    let cls = 'level-' + level
    let rowCls = 'section'
    if (level === 1) {
      rowCls = 'sub-section'
    } else if (level === 2) {
      rowCls = 'category'
    }
    const nextLevel = level + 1
    for (let i = 0; i < size; i++) {
      output.push(secs[i])
      let children = this._addLevelInfo(sections, nextLevel, secs[i].id)
      if (children.length === 0) {
        rowCls = 'category'
        cls += ' level-category'
      }
      secs[i].class = cls
      secs[i].rowClass = rowCls
      output.push(...children)
    }
    return output
  },

  getMonthName (dt) {
    const months = this.getMonths()
    const month = dt.split('/')[1]
    return months[month]
  },
  getMonths () {
    return {
      '01': 'january',
      '02': 'february',
      '03': 'march',
      '04': 'april',
      '05': 'may',
      '06': 'june',
      '07': 'july',
      '08': 'august',
      '09': 'september',
      '10': 'october',
      '11': 'november',
      '12': 'december'
    }
  },

  getDefaultValues () {
    return {
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
      year: 0
    }
  },
  processOutcomes (outcomes, categoriesGroups) {},
  processInvestiments (investiments, categoriesGroups) {}
}
