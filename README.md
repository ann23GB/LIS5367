
```shell
$ npm start

Create a Component that is routing Aware
=========================================
[1]
$ ng generate module components/xxx --routing
$ ng generate component components/xxx
[2]
Add Routing in app.routing.module.ts - change variable in line #4
[3]
in xxx-routing.module.ts --> add routes variable
[4]
ex: Use component TimeSheetComponent in HomeModule Module
> Inside Timesheet Module, export the Component (line 14) (under exports section)
> Import TimeSheet Module in HomeModule (under imports section)
> To use data, import the Service by adding the service decleration inside 'providers section' in the module

To Delete Data from Local
===========================
> F12 --> Applicatiuon --> Local Storage --> localData --> right click and delete

To Add new Setr of Initial Data
===============================
> todo.service.ts change getAllTodos method

```


##### Publisb new Code Changes to website

##### Build Code and Publish Website
ng build --prod --base-href "https://ann23GB.github.io/LIS5367/"
npx angular-cli-ghpages --dir  dist\todo-nanny-app

# Commit and Push Source Code
git add .
git commit -m ""
git push



# Installed NPM Modules
* angular-cli-ghpages": "^1.0.0-rc.2", - To Publish to Github Pages
* "file-saver": "^2.0.5", - To Download file from Browser
