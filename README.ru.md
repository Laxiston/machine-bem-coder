# Как начать работать с проектом

Основано на [Project-stub](https://github.com/bem/project-stub) – это шаблонный репозиторий для создания БЭМ-проектов. 
Он содержит необходимый минимум конфигурационных файлов и папок, который позволяет быстро развернуть проект с нуля.

## Как собрать статичную верстку
1. Указать в настройках [build](build.sh) папку сборки и структуру файлов. 
По умолчанию проект собирается в 
(`BUILD_DIR`) `desktop.bundles/merged/public_html`, 
`css` в (`CSS_DIR`) `public_html/css`, 
`javascript` в (`JS_DIR`) `scripts`.
2. Установить зависимости командой `npm run deps`
3. Запустить `npm run build`

Собранный проект будет лежать в (`BUILD_DIR`) `desktop.bundles/merged/public_html`.
