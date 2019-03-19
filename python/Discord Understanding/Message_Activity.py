#Discord Message Activity 
import json
import pandas as pd

contacts = []
seperate = []
users = {}
userList = []
valueList = []
for x in range(1,4):
    print('data'+(str(x))+'.txt')
    with open(('data'+(str(x))+'.txt'), 'r', encoding="utf8") as handle:
        json_data = [json.loads(line) for line in handle]
        for x in range(len(json_data)):
            try:
                contacts.append(json_data[x]['event_id'])
            except:
                continue

for x in range(len(contacts)):
    if contacts[x] in seperate:
        continue
    else:
        seperate.append(contacts[x])

for x in range(len(seperate)):
    add = {(str(seperate[x])):(str(contacts.count(seperate[x])))}
    users.update(add)

for key,val in users.items():
    userList.append(key)
    valueList.append(val)

#-------------------------------------------------

df = pd.DataFrame({'ID': userList,
                   'VAL': valueList})

writer = pd.ExcelWriter('newDataSheet.xlsx', engine='xlsxwriter')

df.to_excel(writer, sheet_name='messages')

writer.save()
