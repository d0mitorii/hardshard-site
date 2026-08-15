---
title: Мечта ремесленника
description: Мечта ремесленника
slug: /mechanics/craftsman's-dream
---

import { ImageZoom } from "@site/src/components/ImageZoomComponent"
import { Item, Block } from "@site/src/components/PhotoNamePlayer"
import { ImageCarousel } from "@site/src/components/ImageCarousel";

# Мечта ремесленника

Дроп «Мечта ремесленника» направлен на улучшение жизни костяка нашего сообщества — строителей и декораторов. Узнайте, какие нововведения, изменения и механики он добавляет!

### Каменные статуи
Из разных видов каменный материалов вы можете создать статуи – декоративные объекты, схожие со стойками для брони. Все статуи создаются по одному шаблону:

<ImageZoom
  src="/img/mechanics/craftsman's-dream/statue_craft-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/statue_craft-preview.webp"
  alt="Пример крафта статуй"
  description="Пример крафта статуй"
  maxHeight="20rem"
/>
 
Вы можете создать статуи из следующих материалов:
- <Block.sm item="stone" name="камень" />
- <Block.sm item="andesite" name="андезит" />
- <Block.sm item="granite" name="гранит" />
- <Block.sm item="diorite" name="диорит" />
- <Block.sm item="sandstone" name="песчаник" />
- <Block.sm item="red_sandstone" name="красный песчаник" />
- <Block.sm item="deepslate" name="глубинный сланец" />
- <Block.sm item="prismarine" name="призмарин" extension=".gif" />
- <Block.sm item="blackstone" name="чернит" />
- <Item.sm item="quartz" name="кварц" />
- <Block.sm item="end_stone" name="эндерняк" />
 
<ImageZoom
  src="/img/mechanics/craftsman's-dream/statues-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/statues-preview.webp"
  alt="Все виды статуй"
  description="Все виды статуй"
/>

После установки статуя всегда находится в стандартной позе. Инструментом для работы со статуями является <Item.sm item={["wooden_pickaxe","stone_pickaxe","iron_pickaxe","golden_pickaxe", "diamond_pickaxe", "netherite_pickaxe"]} name="кирка" />:
- в приседе нажмите ЛКМ — статуя повернётся;
- в приседе нажмите ПКМ — статуя поменяет позу (доступно 4 позы, включая стандартную).

Вы можете вложить в каждую руку статуи по одному предмету, взяв нужный предмет и нажав ПКМ по руке статуи, в которую вы хотите вложить предмет. Нажатие пустой рукой по руке статуи, держащей предмет, позволит его забрать.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/statues_on_postament-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/statues_on_postament-preview.webp"
  alt="Пример использования статуй"
  description="Пример использования статуй"
/>
 
Вы можете украсить статую соответствующим узором, использовав на ней шаблон для брони. Шаблон для брони при этом не тратится.

### Изменения стоек для брони

Стойки для брони теперь имеют **руки**, как в *Bedrock Edition*. Держа в руках <Item.sm item={["wooden_axe","stone_axe","iron_axe","golden_axe", "diamond_axe", "netherite_axe"]} name="топор" /> из любого материала, присядьте и нажмите по стойке ПКМ, чтобы изменить её позу. Всего доступно 13 различных поз, включая по умолчанию.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/armor_stands-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/armor_stands-preview.webp"
  alt="Новые стойки для брони"
  description="Новые стойки для брони"
/>
 
### Новые декоративные блоки

Разорители, хоглины и зоглины, убитые взрывом заряженного крипера, теперь дропают свои головы. Их можно установить, и тогда они будут обладать твёрдым хитбоксом. Нажатие ПКМ по установленной голове воспроизведёт звук соответствующего моба.
Вы также можете надеть новые головы.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/custom_heads-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/custom_heads-preview.webp"
  alt="Бедное зверьё"
  description="Бедное зверьё"
/>
 
Используя спороцвет и один из ингредиентов – <Item.sm item="crimson_fungus" name="багровый гриб" />, <Item.sm item="warped_fungus" name="искажённый гриб" /> или <Block.sm item="basalt" name="базальт" />, искажённый или пепельный спороцвет соответственно. При установке они будут непрерывно создавать частицы багровых спор, искажённых спор или пепла соответственно.

<ImageCarousel
  images={[
    { src: "/img/mechanics/craftsman's-dream/crimson_spore_blossom-full.webp", srcThumb: "/img/mechanics/craftsman's-dream/crimson_spore_blossom-preview.webp", alt: "", description: "Багровый спороцвет"},
    { src: "/img/mechanics/craftsman's-dream/warped_spore_blossom-full.webp", srcThumb: "/img/mechanics/craftsman's-dream/warped_spore_blossom-preview.webp", alt: "", description: "Искажённый спороцвет"},
    { src: "/img/mechanics/craftsman's-dream/basalt_spore_blossom-full.webp", srcThumb: "/img/mechanics/craftsman's-dream/basalt_spore_blossom-preview.webp", alt: "", description: "Пепельный спороцвет"},
  ]}
/>
 
### Покраска блоков
Держа <Item.sm item="brush" name="кисть" /> в основной руке, а <Item.sm item={["white_dye","light_gray_dye","gray_dye","black_dye","brown_dye","red_dye","orange_dye","yellow_dye","lime_dye","green_dye","cyan_dye","light_blue_dye","blue_dye","purple_dye","magenta_dye","pink_dye"]} name="краситель" /> в другой, нажмите ПКМ по определённым блокам, чтобы покрасить их в цвет красителя. Поддерживаются следующие блоки:

- керамика
- глазурованная керамика (сохраняет поворот)
- стекло
- стеклянные панели (сохраняют свою форму)
- шерсть
- ковры
- бетон
- сухой бетон

Каждый покрашенный блок тратит 1 краситель и 1 единицу прочности (если кисть зачарована на «Прочность», с некоторым шансом потери прочности не будет).

<ImageZoom
  src="/img/mechanics/craftsman's-dream/brish_and_due-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/brish_and_due-preview.webp"
  alt="Использование кисти для перекраски"
  description="Использование кисти для перекраски"
/>
 
### Архитектор

Новый босс, **Архитектор**, является грозным противником, использующий свой молот для проведения сокрушительных атак и создания каменных творений – колонн и мобов-помощников.
<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect-preview.webp"
  alt="Он такой грозный"
  description="Он такой грозный"
/>
 
Архитектора можно призвать, построив тотем из полированного и резного туфа, алмазных блоков и резной тыквы. После призыва Архитектор будет пребывать в дремлющем состоянии. Для его активации необходимо использовать <Item.sm item="heavy_core" name="навершие булавы"/>, после чего битва начнётся.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect_craft-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect_craft-preview.webp"
  alt="Призыв Архитектора"
  description="Призыв Архитектора"
/>
 
Архитектор обладает защитой босса:
- Урон от булавы и копья ограничен 20 единицами здоровья;
- Босс не получает урон за пределами радиуса агрессии.
Архитектор обладает 250 единицами здоровья и базовым уроном в 20 единиц и полностью невосприимчив к отбрасыванию от атак и взрывов. Атаки молотом игнорируют 15% брони и разрушают блоки в области удара.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect_1-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect_1-preview.webp"
  alt="Памагити"
  description="Памагити"
/>
 
Во время боя Архитектор будет призывать помощников – каменные статуи зомби, скелетов и криперов. Все они имеют 30 единиц здоровья (за исключением скелетов, которые обладают 24 единицами здоровья) и имеют сопротивление к отбрасыванию. И да, у скелета будет **каменный лук**.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect_2-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect_2-preview.webp"
  alt="Каменный лук!!!"
  description="Каменный лук!!!"
/>
 
Архитектор также способен призывать колонны, наносящие урон при призыве. Колонны могут быть призваны поодиночке, а могут окружить игрока, закрыв его в ловушке.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect_3-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect_3-preview.webp"
  alt="Каменные колонны!1!!"
  description="Каменный колонны!!!"
/>

После смерти Архитектор оставит навершие булавы, использованное для его призыва, а также молот Архитектора – мощный инструмент, который можно использовать для изменения формы и направления блоков.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/architect_hummer-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/architect_hummer-preview.webp"
  alt="Молот Архитектора"
  description="Молот Архитектора"
/>

### Окисление меди

<ImageZoom
  src="/img/mechanics/craftsman's-dream/oxydyzing_copper-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/oxydyzing_copper-preview.webp"
  alt="Окисли меня полностью"
  description="Окисли меня полностью"
/>
 
Используйте <Item.sm item="awkard_splash_water_bottle" name="густое взрывное зелье" />, чтобы мгновенно окислить медные блоки в радиусе **3 блоков** на **одну стадию**. Поддерживаются все разновидности меди.
Вощёные медные блоки **не будут** окисляться при использовании зелья.

:::warning Внимание!

Окисление **медных сундуков** на данный момент не поддерживается, оно будет добавлено в будущем.

:::

### Прочие нововведения
- Сухой бетон, установленный на плотный лёд, **не будет затвердевать**.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/dream_beach-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/dream_beach-preview.webp"
  alt="Пока на расслабоне, на чилле"
  description="Пока на расслабоне, на чилле"
/>

- <Item.sm item="harness" name="Упряжь" /> может быть зачарована с помощью наковальни на **«Скорость души»**, увеличивая скорость полёта счастливого гаста. Каждый уровень зачарования увеличивает скорость полёта **на 25%** за каждый уровень зачарования.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/speedy_ghast-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/speedy_ghast-preview.webp"
  alt="Уиии!"
  description="Уиии!"
/>

- Двойные плиты из некоторых материалов теперь обладают уникальной текстурой.

<ImageZoom
  src="/img/mechanics/craftsman's-dream/slabs-full.webp"
  srcThumb="/img/mechanics/craftsman's-dream/slabs-preview.webp"
  alt="Обновлённые текстуры двойных плит"
  description="Обновлённые текстуры двойных плит"
/>

- <Block.sm item="calcite" name="Кальцит" /> можно создать из <Item.sm item="quartz" name="кварца" /> и <Block.sm item="andesite" name="андезита" /> (2 кварца + 2 андезита = 2 кальцита).
- Раздатчик можно создать, расположив предметы для создания лука и выбрасыватель в центре сетки крафта.
- Изменена стоимость копирования <Item.sm item={["sentry_armor_trim_smithing_template","dune_armor_trim_smithing_template","coast_armor_trim_smithing_template","wild_armor_trim_smithing_template","ward_armor_trim_smithing_template","eye_armor_trim_smithing_template","vex_armor_trim_smithing_template","tide_armor_trim_smithing_template","snout_armor_trim_smithing_template","rib_armor_trim_smithing_template","spire_armor_trim_smithing_template","wayfinder_armor_trim_smithing_template","shaper_armor_trim_smithing_template","silence_armor_trim_smithing_template","raiser_armor_trim_smithing_template","host_armor_trim_smithing_template","flow_armor_trim_smithing_template","bolt_armor_trim_smithing_template"]} name="кузнечных шаблонов" />: большинство из них теперь требует 4 алмаза и 4 единицы материала вместо 7 алмазов и 1 единицы материала. Это изменение **не относится** к незеритовому шаблону улучшения.
- При создании деревянных люков любого вида теперь получается 3 люка вместо 2.
- Шерсть теперь может быть перекрашена с использованием 1 красителя и 8 блоков любой шерсти.
- <Block.sm item="red_sand" name="Красный песок" /> теперь можно создать из <Block.sm item="sand" name="песка" /> и <Block.sm item="basalt" name="базальта" /> (2 песка + 2 базальта = 4 красного песка).
- <Block.sm item="tuff" name="Туф" /> теперь можно создать из <Block.sm item="cobbled_deepslate" name="колотого сланца" /> и <Block.sm item="andesite" name="андезита" /> (1 колотый сланец + 1 андезит = 2 туфа).
- Алмазная броня теперь может быть переплавлена в печи для получения 1 алмаза.
- Броня ездовых животных (лошади, наутилусы) теперь может быть переплавлена для получения 1 единицы материала.
- Глиняные черепки теперь можно копировать, используя соответствующий черепок, кирпич, кварц и материал, соответствующий черепку:
<table>
  <thead>
    <tr>
      <th>Черепок</th>
      <th>Предмет для копирования</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Item.sm item="angler_pottery_sherd" name="Рыбак" /></td>
      <td><Item.sm item="cod" name="Треска" /></td>
    </tr>
    <tr>
      <td><Item.sm item="archer_pottery_sherd" name="Лучник" /></td>
      <td><Item.sm item="arrow" name="Стрела" /></td>
    </tr>
    <tr>
      <td><Item.sm item="arms_up_pottery_sherd" name="Руки вверх" /></td>
      <td><Item.sm item="stick" name="Палка" /></td>
    </tr>
    <tr>
      <td><Item.sm item="blade_pottery_sherd" name="Клинок" /></td>
      <td><Item.sm item="iron_nugget" name="Кусочек железа" /></td>
    </tr>
    <tr>
      <td><Item.sm item="brewer_pottery_sherd" name="Зельевар" /></td>
      <td><Item.sm item="glass_bottle" name="Бутылочка" /></td>
    </tr>
    <tr>
      <td><Item.sm item="burn_pottery_sherd" name="Пламя" /></td>
      <td><Item.sm item="charcoal" name="Древесный уголь" /></td>
    </tr>
    <tr>
      <td><Item.sm item="danger_pottery_sherd" name="Угроза" /></td>
      <td><Item.sm item="gunpowder" name="Порох" /></td>
    </tr>
    <tr>
      <td><Item.sm item="explorer_pottery_sherd" name="Исследователь" /></td>
      <td><Item.sm item="paper" name="Бумага" /></td>
    </tr>
    <tr>
      <td><Item.sm item="flow_pottery_sherd" name="Поток" /></td>
      <td><Item.sm item="wind_charge" name="Заряд ветра" /></td>
    </tr>
    <tr>
      <td><Item.sm item="friend_pottery_sherd" name="Друг" /></td>
      <td><Item.sm item="emerald" name="Изумруд" /></td>
    </tr>
    <tr>
      <td><Item.sm item="guster_pottery_sherd" name="Вихрь" /></td>
      <td><Item.sm item="breeze_rod" name="Вихревой стержень" /></td>
    </tr>
    <tr>
      <td><Item.sm item="heart_pottery_sherd" name="Сердце" /></td>
      <td><Item.sm item="poppy" name="Мак" /></td>
    </tr>
    <tr>
      <td><Item.sm item="heartbreak_pottery_sherd" name="Разбитое сердце" /></td>
      <td><Item.sm item="wither_rose" name="Роза визера" /></td>
    </tr>
    <tr>
      <td><Item.sm item="howl_pottery_sherd" name="Вой" /></td>
      <td><Item.sm item="spruce_sapling" name="Саженец ели" /></td>
    </tr>
    <tr>
      <td><Item.sm item="miner_pottery_sherd" name="Шахтёр" /></td>
      <td><Item.sm item="gold_nugget" name="Кусочек золота" /></td>
    </tr>
    <tr>
      <td><Item.sm item="mourner_pottery_sherd" name="Скорбь" /></td>
      <td><Block.sm item="sculk" name="Скалк" extension=".gif" /></td>
    </tr>
    <tr>
      <td><Item.sm item="plenty_pottery_sherd" name="Изобилие" /></td>
      <td><Item.sm item="dandelion" name="Золотой одуванчик" /></td>
    </tr>
    <tr>
      <td><Item.sm item="prize_pottery_sherd" name="Награда" /></td>
      <td><Item.sm item="diamond" name="Алмаз" /></td>
    </tr>
    <tr>
      <td><Item.sm item="scrape_pottery_sherd" name="Обтёсывание" /></td>
      <td><Item.sm item="copper_nugget" name="Кусочек меди" /></td>
    </tr>
    <tr>
      <td><Item.sm item="sheaf_pottery_sherd" name="Сноп" /></td>
      <td><Item.sm item="wheat" name="Пшеница" /></td>
    </tr>
    <tr>
      <td><Item.sm item="shelter_pottery_sherd" name="Укрытие" /></td>
      <td><Item.sm item={["oak_sapling","spruce_sapling","birch_sapling","jungle_sapling","acacia_sapling","dark_oak_sapling","mangrove_propagule","cherry_sapling"]} name="Любой саженец" /></td>
    </tr>
    <tr>
      <td><Item.sm item="skull_pottery_sherd" name="Череп" /></td>
      <td><Item.sm item="bone" name="Кость" /></td>
    </tr>
    <tr>
      <td><Item.sm item="snort_pottery_sherd" name="Шмыг" /></td>
      <td><Item.sm item="torchflower_seeds" name="Семена факельника" /></td>
    </tr>
  </tbody>
</table>
