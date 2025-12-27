---
title: Напитки и алковарение
description: Напитки и алковарение
slug: /mechanics/drinks-and-brewery
---

import { ImageZoom } from "@site/src/components/ImageZoomComponent"
import { Item, Block } from "@site/src/components/PhotoNamePlayer"

# Напитки и алковарение

<ImageZoom
  src="/img/mechanics/drinks_and_brewery/brewery-and-drinks-banner.png"
  alt="Напитки и алковарение на сервере HardShard"
/>

## Описание

На сервере добавлена возможность варить разного рода напитки, как полезные, так и не очень. 

Отмечайте самые большие праздники, какие только можете себе представить, и всегда сохраняйте веселую атмосферу. Наполните таверны смехом и громкой музыкой, пока на улицах дерутся пьяницы.

В этой статье вы сможете ознакомиться с новыми механиками и узнать примерные рецепты различных напитков.

## Особенности

- Выпивая алкогольные напитки, вы можете опьянеть
- Напитки могут накладывать дополнительные эффекты как положительные, так и отрицательные
- Чем больше вы пьяны, тем сложнее окружиющим понять, что вы пишите в чат
- Если вы выпили слишком много, вас вырвет
- У некачественных сваренных напитков есть такие недостатки, как похмелье
- В случае, если вы покинете сервер будучи пьяным, вы потеряете сознание, и не сможете попасть обратно в течении некоторого - времени
- Для того чтобы быстрее протрезветь, лучше всего употреблять молоко, хлеб или кофе
- Создавайте свои собственные рецепты, включая ингредиенты, процесс создания и эффекты

## Этапы приготовления

Процесс алковарения состоит из различных этапов, таких как **ферментация**, **дистилляция**, **выдержка​**.

:::note 

У каждого напитка есть по три градации. Она зависит от степени соблюдения рецептуры. 

:::

### Ферментация

Изготовление любого напитка начинается с процесса ферментации. Для этого вам понадобится поставить котел с водой над костром или лавой.

<ImageZoom
  src="/img/mechanics/drinks_and_brewery/fermenting.webp"
  alt="Структура для ферментации напитков"
  description="Структура для ферментации напитков"
/>

#### Как использовать
- Добавьте ингредиенты в котел — держите ингредиент в основной руке и нажмите ПКМ
- Подождите некоторое время
- Соберите содержимое котла с помощью <Item.sm item="glass_bottle" name="x3 Пузырьков" />

Некоторые напитки не нуждаются в последующей обработке, и готовы к употреблению сразу после ферментации.

:::tip

С помощью <Item.sm item="clock" name="Часов" extension=".webp" /> можно отслеживать период ферментации ингредиентов в котле. Держа их в руке, нажмите ПКМ по котлу. Вся полезная информация будет выводиться в чат.

:::

:::note

Ведь если передержать или не доварить ингредиенты, вы получите <Item.sm item="potion_of_poison" name="Неудачный напиток" />.

:::

### Дистилляция

**Дистилляция** — это перегонка, испарение жидкости с последующим охлаждением и конденсацией паров. В процессе перегонки, процент алкоголя в напитках увеличивается с каждым циклом.

Для проведения дистилляции вам потребуется <Block.sm item={["brewing_stand_(empty)", "cobblestone"]} name="Зельеварка" />, <Item.sm item="glowstone_dust" name="Светокаменная пыль"/> (она не расходуется в процессе, используется как фильтр) и <Item.sm item={["beer", "blackbear", "gin", "rum", "whiskey", "appleliqueur", "applemead"]} name="Исходный напиток" />.

### Выдержка

После розлива по бутылкам и дистилляции некоторым напиткам (в частности алкогольным) необходима выдержка. Выдержка — это длительность пребывания напитка в бочке.

:::note

Одни игровые сутки равны одному году выдержки!

:::

## Бочки

Cуществует три вида бочек: [маленькая](#small-barrel), [средняя](#medium-barrel) и [большая](#big-barrel).

#### Как использовать
- Откройте бочку, нажав на нее ПКМ
- Поместите бутылки в бочки для выдержки
- В зависимости от рецепта тип древесины, использованной для изготовления бочки, может изменить качество выдержанного напитка.

:::tip

При создании бочек, важно учитывать тип древесины. Для выдержки разных напитков нужны разные типы древесины!

Обычная бочка имеет тип древесины дуба.

:::

### Маленькая бочка {#small-barrel}

Вмещает в себя **6 бутылок** с напитками.

Самый простой и доступный способ выдержки напитка. Вам понадобится <Block.sm item="barrel" name="x1 Бочка" />.

<ImageZoom
  src="/img/mechanics/drinks_and_brewery/small-barrel.png"
  alt="Маленькая бочка для выдержки напитков"
  description="Маленькая бочка для выдержки напитков"
/>

### Средняя бочка {#medium-barrel}

Вмещает в себя **9 бутылок** с напитками.

Это структура состоящая из <Block.sm item="oak_stairs" name="x8 Деревянных ступенек" /> и <Item.sm item="oak_sign" name="x1 Таблички" />.

:::note

**Обязательно** расположите табличку с текстом `Barrel` с торца структуры, в правой нижней части.

:::

<ImageZoom
  src="/img/mechanics/drinks_and_brewery/medium-barrel-structure.webp"
  alt="Структура средней бочки для выдержки напитков"
  description="Строительство средней бочки"
/>

### Большая бочка {#big-barrel}

Вмещает в себя **27 бутылок** с напитками.

Более сложная структура, состоящая из <Block.sm item="oak_planks" name="x18 Досок" />, <Block.sm item="oak_stairs" name="x16 Деревянных ступенек" />, <Block.sm item="oak_fence" name="x5 Деревянных заборов" /> и <Item.sm item="oak_sign" name="x1 Табличка" />.

:::note

**Обязательно** расположите табличку с текстом `Barrel` с торца структуры, в центральной верхней части.

:::

<ImageZoom
  src="/img/mechanics/drinks_and_brewery/big-barrel-structure.webp"
  alt="Структура большой бочки для выдержки напитков"
  description="Строительство большой бочки"
/>

:::tip

После создания большой бочки табличку с текстом можно сломать.

:::

## Таблица рецептов

<table>
  <thead>
    <tr>
      <th>Напиток</th>
      <th>Ингредиенты</th>
      <th>Время приготовления</th>
      <th>Подлежит дистилляции</th>
      <th>Выдержка / Тип бочки</th>
      <th>Содержание алкоголя</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Item.sm item="beer" name="Пиво" /></td>
      <td><Item.sm item="wheat" name="x5-7 Пшеницы" /></td>
      <td>6-10 минут</td>
      <td>Нет</td>
      <td>3 Года / Любая</td>
      <td>1</td>
    </tr>
    <tr>
      <td><Item.sm item="beer" name="Пиво светлое" /></td>
      <td><Item.sm item="wheat" name="x2-4 Пшеницы" /></td>
      <td>6-10 минут</td>
      <td>Нет</td>
      <td>2 Года / Береза</td>
      <td>1</td>
    </tr>
    <tr>
      <td><Item.sm item="blackbear" name="Пиво темное" /></td>
      <td><Item.sm item="wheat" name="x5-7 Пшеницы" /></td>
      <td>6-10 минут</td>
      <td>Нет</td>
      <td>3 Года / Темный дуб</td>
      <td>1.5</td>
    </tr>
    <tr>
      <td><Item.sm item="wine" name="Красное вино" /></td>
      <td><Item.sm item="sweet_berries" name="x3-6 Сладких ягод" /></td>
      <td>3-6 минут</td>
      <td>Нет</td>
      <td>Много лет / Любая</td>
      <td>1.5</td>
    </tr>
    <tr>
      <td><Item.sm item="applemead" name="Медовуха" /></td>
      <td><Item.sm item="sugar_cane" name="x5-7 Сахарного тростника" /></td>
      <td>1-4 минуты</td>
      <td>Нет</td>
      <td>4 года / Дуб</td>
      <td>1.5</td>
    </tr>
    <tr>
      <td><Item.sm item="applemead" name="Яблочная медовуха" /></td>
      <td><Item.sm item="sugar_cane" name="x5-7 Сахарного тростника" /><br /><Item.sm item="apple" name="x1 Яблоко" /></td>
      <td>1-4 минуты</td>
      <td>Нет</td>
      <td>4 года / Дуб</td>
      <td>2</td>
    </tr>
    <tr>
      <td><Item.sm item="holycatcider" name="Яблочный сидр" /></td>
      <td><Item.sm item="apple" name="x? Яблок" /></td>
      <td>5-10 минут</td>
      <td>Нет</td>
      <td>3 года / Любая</td>
      <td>1.5</td>
    </tr>
    <tr>
      <td><Item.sm item="appleliqueur" name="Яблочный ликер" /></td>
      <td><Item.sm item="apple" name="x? Яблок" /></td>
      <td>Долго</td>
      <td>Да</td>
      <td>6 Года / Акация</td>
      <td>2.5</td>
    </tr>
    <tr>
      <td><Item.sm item="whiskey" name="Виски" /></td>
      <td><Item.sm item="wheat" name="x? Пшеницы" /></td>
      <td>0.5-1.5 мин. на каждую единицу пшеницы</td>
      <td>Да</td>
      <td>Очень долго / Темный дуб.</td>
      <td>3.5</td>
    </tr>
    <tr>
      <td><Item.sm item="rum" name="Ром" /></td>
      <td><Item.sm item="sugar_cane" name="x? Сахарного тростника" /></td>
      <td>Быстро</td>
      <td>Да</td>
      <td>Долго / Дуб</td>
      <td>4</td>
    </tr>
    <tr>
      <td><Item.sm item="vodka" name="Водка" /></td>
      <td><Item.sm item="potato" name="x7-13 Картошки" /></td>
      <td>Долго</td>
      <td>Да</td>
      <td>Нет</td>
      <td>3</td>
    </tr>
    <tr>
      <td><Item.sm name="Грибная настойка" /></td>
      <td>
      <Item.sm item="potato" name="x? Картошки" /><br /><Item.sm item={["red_mushroom", "brown_mushroom"]} name="x? Грибов" extension=".webp" /></td>
      <td>Очень долго</td>
      <td>Да</td>
      <td>Нет</td>
      <td>2.5</td>
    </tr>
    <tr>
      <td><Item.sm item="gin" name="Джин" /></td>
      <td><Item.sm item="wheat" name="x8-10 Пшеницы" /><br /><Item.sm item="cornflower" name="x? Синих васильков" extension=".webp" /><br /><Item.sm item="apple" name="x1 Яблоко" /></td>
      <td>Быстро</td>
      <td>Да</td>
      <td>Нет</td>
      <td>3</td>
    </tr>
    <tr>
      <td><Item.sm item="tequila" name="Текила" /></td>
      <td><Block.sm item="cactus" name="x6-9 Кактуса" /></td>
      <td>Долго</td>
      <td>Да</td>
      <td>Долго / Береза</td>
      <td>3</td>
    </tr>
    <tr>
      <td><Item.sm item="absentee" name="Абсент" /></td>
      <td><Item.sm item="short_grass" name="x? Травы" extension=".webp" /></td>
      <td>Быстро</td>
      <td>Да</td>
      <td>Нет</td>
      <td>5.5</td>
    </tr>
    <tr>
      <td><Item.sm item="absentee" name="Зеленый абсент" /></td>
      <td><Item.sm item="short_grass" name="x? Травы" extension=".webp" /><br /><Item.sm item="miss" name="x? Ядовитый ингредиент" /></td>
      <td>Средне</td>
      <td>Да</td>
      <td>Нет</td>
      <td>6</td>
    </tr>
    <tr>
      <td><Item.sm name="Бульбяны суп" /></td>
      <td><Item.sm item="potato" name="x3-8 Картошки" /><br /><Item.sm item="short_grass" name="x? Травы" extension=".webp" /></td>
      <td>Быстро</td>
      <td>Нет</td>
      <td>Нет</td>
      <td></td>
    </tr>
    <tr>
      <td><Item.sm item="coffee" name="Кофе" /></td>
      <td><Item.sm item="cocoa_beans" name="x? Какао бобов" /><br /><Item.sm item="milk_bucket" name="x2 Ведра молока" /></td>
      <td>Быстро</td>
      <td>Нет</td>
      <td>Нет</td>
      <td></td>
    </tr>
    <tr>
      <td><Item.sm item="eggnog" name="Гоголь-Моголь" /></td>
      <td><Item.sm item="egg" name="x3-7 Яиц" /><br /><Item.sm item="sugar" name="x? Сахара" /><br /><Item.sm item="milk_bucket" name="x1 Ведро молока" /></td>
      <td>Быстро</td> 
      <td>Нет</td>
      <td>Быстро / Любая</td>
      <td>1.5</td>
    </tr>
  </tbody>
</table>

<!-- ## Добавить свой напиток

Вы можете добавить собственный напиток на сервер с уникальным рецептом и эффектами. Для этого предоставьте <Item.sm item="paper" name="Счастливый билетик (напиток)" color="#5454FC" /> [Техническому администратору](/docs/admins#maintenance-and-supervision-department-employees) или его [Заместителю](/docs/admins#maintenance-and-supervision-department-employees).

:::note

Как получить <Item.sm item="paper" name="Счастливый билетик (напиток)" color="#5454FC" /> и другие предметы читайте в статье [Система голосования](/docs/voting).

::: -->