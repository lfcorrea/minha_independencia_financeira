filePrefix = "people"
enc = "ISO8859-1"
file = open(filePrefix + ".txt", encoding=enc, mode="r")
lines = file.readlines()

items = []
count = 0
for line in lines:
  ln = line.strip()
  values = ln.split(";")
  id = values[0].strip()
  user = values[1].strip()
  name = values[2].strip()
  avatarColor = values[3].strip()
  dft = values[4].strip()
  item = { "id": id, "userId": user, "name": name, "avatar": "", "avatarColor": avatarColor, "default": dft }
  items.append(item)

file.close()

itemsText = str(items)
itemsText = itemsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open(filePrefix + ".json", encoding=enc, mode="w")
filew.write(itemsText)
filew.close()