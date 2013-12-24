

## Рабочие окружение Vagrant

Настройка рабочего окружения с помощью  [Vagrant](http://downloads.vagrantup.com/)
на виртуальной машине [VirtualBox](http://www.virtualbox.org)
для работы их необходимо установить для вашей операционной системы.

Зайти в новый каталог вашего проекта и запустить виртуальную машину:

    cd my_project
    vagrant up
    vagrant provision

Для использования bem-tools заходим в консоль виртуальной машины:

    vagrant ssh

Первый запуск может потребовать длительного время времени, дополнительные команды
для управления виртуальной машиной: `vagrant halt` - приостановить,  `vagrant destroy` - удалить.

## Кодим по БЕМу и смотрим результат

Запустить bem-server:

    bem server

Первый запуск склонирует в папку `libs` библиотеки [bem-core](https://github.com/bem/bem-core) и
 [bem-components](https://github.com/bem/bem-components)

index-страница будет доступна по адресу
 <a href="http://localhost:8080/desktop.bundles/index/index.html">http://localhost:8080/desktop.bundles/index/index.html</a>

Контентные картинки хранятся в `/desktop.bundles/merged/img`.

Чтобы не копивать их в каждую папку бандла, можно делать симлинки из папки merged.

Пример для страницы `index`

    ln -s $(pwd)/desktop.bundles/merged/img/ $(pwd)/desktop.bundles/index/img