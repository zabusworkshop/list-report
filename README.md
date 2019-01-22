# List Report Example for Fiori Elements Workshop (RU)

Шаги 1-3 воспроизведены по гайду https://blogs.sap.com/2017/03/27/develop-fiori-list-report-and-object-page-fiori-elements-using-northwind-odata-service-and-local-annotations/

## 1. Создание проекта
Создаем проект по шаблону List Report. 
Используем OData-сервис https://services.odata.org/V2/Northwind/Northwind.svc

В Data binding выбираем Orders с Navigation на Order_Details. Уже можно запустить приложение, но мы увидим только пустой экран.

## 2. Основные аннотации
Добавим файл с аннотациями. В Annotation Modeler добавим LineItem, в него несколько DataField - они отвечают за колонки списка. Затем добавим несколько DataPoint, они отвечают за заголовки на ObjectPage. 

## 3. Детальная информация на Object Page
Добавим по FieldGroup для информации о клиенте и доставщике. 
Добавим Facets и в нем по ReferenceFacet, которые ссылаются на qualifier FieldGroup с информацией о клиенте и доставщике соответственно. Теперь у нас есть вкладки с детальной информацией.

## 4. Фильтры с подсказками
Протестируем фильтрацию на поле EmployeeID. Добавим DataField EmployeeID в таблицу, чтобы видеть, как отфильтровываются записи.
Теперь добавим SelectionField на EmployeeID, чтобы он появился в фильтер-баре - можно фильтровать, но подсказок пока нет.
С фильтрами с подсказками какая-то бага в SAPUI5 1.44, они не применяются. Поэтому обновим версию до 1.52.13 в neo-app.json.
Чтобы добавить подсказки к фильтрам, добавим аннотацию ValueList на Order/EmployeeID. В ValueListParameterOut указываем, по каким полям матчить коллекции order и Employee (по EmployeeID). И также укажем два ValueListParameterDisplayOnly для FirstName и LastName, чтобы они отображались в таблице при поиске для наглядности. Чтобы в этой таблице у колонок были заголовки, добавим label к Employee/EmployeeID, Employee/FirstName и Employee/LastName.