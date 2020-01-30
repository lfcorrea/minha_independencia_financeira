filePrefix = "creditCards"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  ln = line.strip()
  values = ln.split(";")
  # TODO: link with correct info, not hard-coded
  # id;ccBrand;personId;userId;description;closingDay;payday
  id = values[0].strip()
  ccBrandId = values[1].strip()
  personId = values[1].strip()
  userId = values[3].strip()
  description = values[4].strip()
  closingDay = values[5].strip()
  payDay = values[6].strip()
  item = { "id": id, "ccBrandId": ccBrandId, "personId": personId, "userId": userId, "description": description, "closingDay": closingDay, "payDay": payDay, "avatar": "" }
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()