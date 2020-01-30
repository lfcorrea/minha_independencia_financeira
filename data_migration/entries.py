filePrefix = "entries"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  ln = line.strip()
  values = ln.split(";")
  # id;person_id;user_id;category;value;description;date;
  id = values[0].strip()
  personId = values[1].strip()
  userId = values[2].strip()
  category = values[3].strip()
  value = values[4].strip()
  description = values[5].strip()
  date = values[6].strip()
  item = { "id": id, "personId": personId, "userId": userId, "categoryId": category, "value": value, "description": description, "date": date }
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()