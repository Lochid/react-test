# ROADMAP
1. API methods get and post with params thunk
2. API methods get and post with params saga
3. axios
4. style theme
5. mouse side effect

/assets - если они участвуют в компиляции (svg иконки, шаблон html)
/public - если они не участвуют в процессе компиляции (fonts, icons)
/src
--/components - только в этой папке именуем папки с большой буквы
----/common - компоненты повторяющиеся на разных экранах
----/Barriers
------/index.ts

------/style.modules.css
------/Events
--------/index.ts

--------/style.modules.css
------/Barrier
--/styles - общие css переменные / общие классы (css modules - common.modules.css)
--/store - redux
------/actionCreators.ts ждем обсуждение redux-toolkit
------/sagas.ts
------/selectors.ts

------/types.ts - типы для сторы и моделек

------/index.ts - интерфейс взаимодействия
--/api
----/apiRoutes.ts - как конструировать их и как хранить
--/locales
--/constants - enums, значения для setTimeout которые используются для нескольких компонентов
----/routes.ts - файл в котором урлы из навигации - webRoutes (/main/cameras || /rrs/cameras)
--/utils - useragent, конструктор webRoutes(в helpers)
