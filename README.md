"# meetup-app"

Приложение на React+Redux.


Приложение представляет собой список мероприятий с возможностью добавления и удаления.


* Строка в поле "Поиск" фильтрует список мероприятий по названию. Если строка пуста, показываются все мероприятия.
Если в поле "Поиск" что-то введено, то отображаются те мероприятия, в названии которых содержится введённая строка.


* Клик на кнопку "+" открывает окно добавления со следующими полями:

1. "Название" - обычное текстовое поле

2. "Дата" - поле выбора даты

3. "Город" - выпадающий список


* Клик на кнопку "Добавить" добавляет новое мероприятие в таблицу

* Клик на кнопку "-" открывает окно подтверждения удаления мероприятий

* В случае подтверждения удаления мероприятий, удаляются те мероприятия, которые отмечены чекбоксами

* Кнопку "-" невозможно кликнуть, пока не выбрано хотя бы одно мероприятие



Важно! Redux-state должен максимально подробно хранить состояние приложения, ничего не должно храниться в состоянии компонентов.