# List Report Example for Fiori Elements Workshop (RU)

## 1. Создание проекта
Создаем проект по шаблону List Report. 
Используем OData-сервис https://services.odata.org/V2/Northwind/Northwind.svc

В Data binding выбираем Orders с Navigation на Order_Details. Уже можно запустить приложение, но мы увидим только пустой экран.

## 2. Основные аннотации
Добавим файл с аннотациями. В Annotation Modeler добавим LineItem, в него несколько DataField - они отвечают за колонки списка. Затем добавим несколько DataPoint, они отвечают за заголовки на ObjectPage. 