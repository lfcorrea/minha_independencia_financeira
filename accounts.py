filePrefix = "accounts"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  # id;bankId;accountType;personId;userId;balance;description
  ln = line.strip().split(";")
  id = ln[0].strip()
  bankId = ln[1].strip()
  accountTypeId = ln[2].strip()
  personId = ln[3].strip()
  userId = ln[4].strip()
  balance = ln[5].strip()
  description = ln[6].strip()
  item = { "id": id, "bankId": bankId, "accountTypeId": accountTypeId, "personId": personId, "userId": userId, "balance": balance, "description": description, "avatar": ""}
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()