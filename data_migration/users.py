filePrefix = "users"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  ln = line.strip()
  values = ln.split(";")
  id = values[0].strip()
  name = values[1].strip()
  login = values[2].strip()
  email = values[3].strip()
  pwd = values[4].strip()
  item = { "id": id, "name": name, "login": login, "email": email, "password": pwd, "avatar": ""}
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()