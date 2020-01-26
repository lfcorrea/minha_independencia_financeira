filePrefix = "categories"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  ln = line.strip()
  values = ln.split(";")
  # TODO: link with correct info, not hard-coded
  # Id	description	Order	Parent_id	Section_id
  id = values[0].strip()
  description = values[1].strip()
  order = values[2].strip()
  parentId = values[3].strip()
  sectionId = values[4].strip()
  userId = values[5].strip()
  item = { "id": id,"description": description, "order": order, "parentId": parentId, "sectionId": sectionId, "userId": userId, "rank": "", "meaning": ""}
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()