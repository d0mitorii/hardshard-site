---
title: Еда и блюда
slug: /archive/mechanics/more-food
description: На сервере добавлено более 50 новых блюд. Узнайте о их рецептах и особенностях в статье на нашем сайте.
---

import { ImageZoom } from "@site/src/components/ImageZoomComponent"
import { Item, Block } from "@site/src/components/PhotoNamePlayer"
import { HungerSaturationIndicator } from "@site/src/components/HungerIndicator"

# Еда и блюда

<ImageZoom
  src="/img/mechanics/more_food/joshs-more-foods.png"
  alt="Joshs More Foods баннер"
/>

> Партия выдать одна миска риса

## Описание {#description}

На нашем сервере расширен ассортимент еды и блюд более чем на 50 новых видов. Также добавлены кухонная плита и различные кухонные принадлежности.

## Кулинарная книга {#cookbook}

<Item.sm item="cookbook" name="Кулинарная книга Джоша" /> — это внутриигровой гид по всем доступным рецептам. Её можно создать при помощи <Item.sm item="bread" name="Хлеба" /> и <Item.sm item="writable_book" name="Книги с пером" />.

<ImageZoom
  src="/img/mechanics/more_food/cookbook-craft.png"
  alt="Рецепт создания кулинарной книги Джоша"
  description="Рецепт создания кулинарной книги Джоша"
/>

## Книга о питании {#nutritionbook}

Для информации о питательной ценности всех новых видов еды создайте <Item.sm item="nutritionbook" name="Книгу Джоша о питании" />, используя <Item.sm item="carrot" name="Морковь" /> и <Item.sm item="writable_book" name="Книгу с пером" />.

<ImageZoom
  src="/img/mechanics/more_food/nutritionbook-craft.png"
  alt="Рецепт создания книги о питании"
  description="Рецепт создания книги о питании"
/>

## Кухонная плита {#cooking-station}

<Block.sm item="cooking_station" name="Кухонная плита" /> — новый блок, необходимый для приготовленяи новых блюд.

<ImageZoom
  src="/img/mechanics/more_food/station-craft.png"
  alt="Рецепт создания кухонной плиты"
  description="Рецепт создания кухонной плиты"
/>

<ImageZoom
  src="/img/mechanics/more_food/cooking-station.png"
  alt="Интерфейс кухонной плиты"
  description="Интерфейс кухонной плиты"
/>

Ингредиенты размещаются в левой части. Готовое блюдо появляется в правой части после приготовления. Для многих рецептов необходим контейнер, например <Item.sm item="bowl" name="Миска" />, который следует поместить в соответствующий слот.

Для рецептов, требующих воду, резервуар заполняется <Item.sm item="water_bucket" name="Ведром воды" />. Целого резервуара хватает на 16 использований. Чтобы освободить резервуар от воды, поместите <Item.sm item="bucket" name="Пустое ведро" /> в слот для ингредиентов.

## Ножи {#knives}

Ножи — это новые инструменты, которые необходимо использовать при приготовлении блюд.

:::warning Внимание

Рецептов, требующих нож, пока нет.

:::

#### Как создать {#how-to-craft-knives}

<ImageZoom
  src="/img/mechanics/more_food/knives_crafts.webp"
  alt="Рецепты создания ножей: Josh's More Food"
  description="Рецепты создания ножей"
/>

#### Таблица урона и скорости атаки

Ножи можно использовать как оружие. Их скорость атаки выше, чем у меча, но они наносят небольшой урон.

<table>
  <thead>
    <tr>
      <th>Тип ножа</th>
      <th>Урон</th>
      <th>Скорость атаки</th>
      <th>Прочность</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Item.sm item="wooden_knife" name="Деревянный нож" /></td>
      <td align="right">2.5</td>
      <td align="right">2</td>
      <td align="right">59</td>
    </tr>
    <tr>
      <td><Item.sm item="stone_knife" name="Каменынй нож" /></td>
      <td align="right">3.5</td>
      <td align="right">2</td>
      <td align="right">131</td>
    </tr>
    <tr>
      <td><Item.sm item="iron_knife" name="Железный нож" /></td>
      <td align="right">4</td>
      <td align="right">2</td>
      <td align="right">250</td>
    </tr>
    <tr>
      <td><Item.sm item="golden_knife" name="Золотой нож" /></td>
      <td align="right">3</td>
      <td align="right">2</td>
      <td align="right">32</td>
    </tr>
    <tr>
      <td><Item.sm item="diamond_knife" name="Алмазный нож" /></td>
      <td align="right">5</td>
      <td align="right">2</td>
      <td align="right">1561</td>
    </tr>
    <tr>
      <td><Item.sm item="netherite_knife" name="Незеритовый нож" /></td>
      <td align="right">5.5</td>
      <td align="right">2</td>
      <td align="right">2031</td>
    </tr>
</tbody>
</table>

## Рис {#rice}

:::tip

В любом рецепте вместо <Item.sm item="wheat" name="Пшеницы" /> можно использовать <Item.sm item="rice" name="Рис" />.

:::

#### Как приготовить {#how-to-cook-rice}

:::note

Для приготовления требуется **вода**.

:::

<ImageZoom
  src="/img/mechanics/more_food/rice.png"
  alt="Рецепт создания риса: Josh's More Food"
  description="Рецепт создания риса"
/>

## Рисовые блюда {#rice-meals}

:::note

Для приготовления блюд из риса требуется <Item.sm item="bowl" name="Миска" />.

:::

### Чаша риса {#rice-bowl}

#### Как приготовить {#how-to-cook-rice-bowl}

<ImageZoom
  src="/img/mechanics/more_food/rice_bowl.png"
  alt="Рецепт создания чаши риса: Josh's More Food"
  description="Рецепт создания чаши риса"
/>

#### Эффекты {#effects-of-rice-bowl}

- Утоление голода: <HungerSaturationIndicator value={5} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={7} type="saturation"/>

### Жаренный рис {#fried-rice}

#### Как приготовить {#how-to-cook-fried-rice}

<ImageZoom
  src="/img/mechanics/more_food/fried_rice.png"
  alt="Рецепт создания жаренного риса: Josh's More Food"
  description="Рецепт создания жаренного риса"
/>

#### Эффекты {#effects-of-fried-rice}

- Утоление голода: <HungerSaturationIndicator value={10} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={17} type="saturation"/>

### Чемпионадо {#champorado}

#### Как приготовить {#how-to-cook-champorado}

<ImageZoom
  src="/img/mechanics/more_food/champorado.png"
  alt="Рецепт создания чемпионадо: Josh's More Food"
  description="Рецепт создания чемпионадо"
/>

#### Эффекты {#effects-of-champorado}

- Утоление голода: <HungerSaturationIndicator value={4} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={5} type="saturation"/>

## Чайные листья {#tea-leaves}

Для чая нужны <Item.sm item="tea_leaves" name="Чайные листья" />, которые можно получить из <Block.sm item="oak_leaves" name="Дубовых листьев" />, <Block.sm item="dark_oak_leaves" name="Листьев темного дуба" /> и <Block.sm item="birch_leaves" name="Березовых листьев" />. Удача увеличивает шанс их выпадения.

## Чашка {#teacup}

<Item.sm item="teacup" name="Чашка" /> — редмет, который используется в качестве контейнера при создании чая.

После выпивания чая чашка не пропадает.

<ImageZoom
  src="/img/mechanics/more_food/teacup.png"
  alt="Рецепт создания чашки: Josh's More Food"
  description="Рецепт создания чашки"
/>

## Чаи {#teas}

:::note

Для приготовления любого чая требуется **вода** и <Item.sm item="teacup" name="Чашка" />

:::

### Чай со cладкими ягодами {#sweet-berry-tea}

#### Как приготовить {#how-to-cook-sweet-berry-tea}

<ImageZoom
  src="/img/mechanics/more_food/sweet_berry_tea.png"
  alt="Рецепт создания чая со сладкими ягодами: Josh's More Food"
  description="Рецепт создания чая со сладкими ягодами"
/>

#### Эффекты {#effects-of-sweet-berry-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Васильковый чай {#cornflower-tea}

#### Как приготовить {#how-to-cook-cornflower-tea}

<ImageZoom
  src="/img/mechanics/more_food/cornflower_tea.png"
  alt="Рецепт создания Василькового чая: Josh's More Food"
  description="Рецепт создания Василькового чая"
/>

#### Эффекты {#effects-of-cornflower-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Чай из одуванчика {#dandelion-tea}

#### Как приготовить {#how-to-cook-dandelion-tea}

<ImageZoom
  src="/img/mechanics/more_food/dandelion_tea.png"
  alt="Рецепт создания чая из одуванчика: Josh's More Food"
  description="Рецепт создания чая из одуванчика"
/>

#### Эффекты {#effects-of-dandelion-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Зеленый чай {#green-tea}

#### Как приготовить {#how-to-cook-green-tea}

<ImageZoom
  src="/img/mechanics/more_food/green_tea.png"
  alt="Рецепт создания зеленого чая: Josh's More Food"
  description="Рецепт создания зеленого чая"
/>

#### Эффекты {#effects-of-green-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Чай с розой {#rose-tea}

#### Как приготовить {#how-to-cook-rose-tea}

<ImageZoom
  src="/img/mechanics/more_food/rose_tea.png"
  alt="Рецепт создания чая с розой: Josh's More Food"
  description="Рецепт создания чая с розой"
/>

#### Эффекты {#effects-of-rose-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Еловый чай {#spruce-tea}

#### Как приготовить {#how-to-cook-spruce-tea}

<ImageZoom
  src="/img/mechanics/more_food/spruce_tea.png"
  alt="Рецепт создания елового чая: Josh's More Food"
  description="Рецепт создания елового чая"
/>

#### Эффекты {#effects-of-spruce-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

### Чай с сакурой {#sakura-tea}

#### Как приготовить {#how-to-cook-sakura-tea}

<ImageZoom
  src="/img/mechanics/more_food/sakura_tea.png"
  alt="Рецепт создания чая с сакурой: Josh's More Food"
  description="Рецепт создания чая с сакурой"
/>

#### Эффекты {#effects-of-sakura-tea}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>
- Эффекты: **[Регенерация I (0:10)]**

## Хлеба {#breads}

:::tip

Любой новый хлеб можно использовать в рецептах как альтернативу обычному хлебу.

:::

### Свекольный хлеб {#beetroot-bread}

#### Как приготовить {#how-to-cook-beetroot-bread}

<ImageZoom
  src="/img/mechanics/more_food/beetroot_bread.png"
  alt="Рецепт создания свекольного хлеба: Josh's More Food"
  description="Рецепт создания свекольного хлеба"
/>

#### Эффекты {#effects-of-beetroot-bread}

- Утоление голода: <HungerSaturationIndicator value={5} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={6} type="saturation"/>

### Картофельный хлеб {#potato-bread}

#### Как приготовить {#how-to-cook-potato-bread}

<ImageZoom
  src="/img/mechanics/more_food/potato_bread.png"
  alt="Рецепт создания картофельного хлеба: Josh's More Food"
  description="Рецепт создания картофельного хлеба"
/>

#### Эффекты {#effects-of-potato-bread}

- Утоление голода: <HungerSaturationIndicator value={5} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={6} type="saturation"/>

### Морковный хлеб {#carrot-bread}

#### Как приготовить {#how-to-cook-carrot-bread}

<ImageZoom
  src="/img/mechanics/more_food/carrot_bread.png"
  alt="Рецепт создания морковного хлеба: Josh's More Food"
  description="Рецепт создания морковного хлеба"
/>

#### Эффекты {#effects-of-carrot-bread}

- Утоление голода: <HungerSaturationIndicator value={5} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={6} type="saturation"/>

### Сладкий ролл {#sweet-roll}

#### Как приготовить {#how-to-cook-sweet-roll}

<ImageZoom
  src="/img/mechanics/more_food/sweet_roll.png"
  alt="Рецепт создания сладкого ролла: Josh's More Food"
  description="Рецепт создания сладкого ролла"
/>

#### Эффекты {#effects-of-sweet-roll}

- Утоление голода: <HungerSaturationIndicator value={7} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={10} type="saturation"/>

### Бублик {#bagel}

#### Как приготовить {#how-to-cook-bagel}

<ImageZoom
  src="/img/mechanics/more_food/bagel.png"
  alt="Рецепт создания бублика: Josh's More Food"
  description="Рецепт создания бублика"
/>

#### Эффекты {#effects-of-bagel}

- Утоление голода: <HungerSaturationIndicator value={7} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={10} type="saturation"/>

## Печенье {#cookies}

### Медовое печенье {#honey-cookie}

#### Как приготовить {#how-to-cook-honey-cookie}

<ImageZoom
  src="/img/mechanics/more_food/honey_cookie.png"
  alt="Рецепт создания медового печенья: Josh's More Food"
  description="Рецепт создания медового печенья"
/>

#### Эффекты {#effects-of-honey-cookie}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>

### Сахарное печенье {#sugar-cookie}

#### Как приготовить {#how-to-cook-sugar-cookie}

<ImageZoom
  src="/img/mechanics/more_food/sugar_cookie.png"
  alt="Рецепт создания сахарного печенья: Josh's More Food"
  description="Рецепт создания сахарного печенья"
/>

#### Эффекты {#effects-of-sugar-cookie}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>

### Сладкое ягодное печенье {#sweet-berry-cookie}

#### Как приготовить {#how-to-cook-sweet-berry-cookie}

<ImageZoom
  src="/img/mechanics/more_food/sweet_berry_cookie.png"
  alt="Рецепт создания сладкого сахарного печенья: Josh's More Food"
  description="Рецепт создания сладкого сахарного печенья"
/>

#### Эффекты {#effects-of-sweet-berry-cookie}

- Утоление голода: <HungerSaturationIndicator value={2} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={1} type="saturation"/>

## Пироги {#pies}

### Форма пирога {#pie-crust}

:::note

Используется в качестве основы в приготовлении некоторых видов пирогов.

:::

#### Как приготовить {#how-to-cook-pie-crust}

<ImageZoom
  src="/img/mechanics/more_food/pie_crust.png"
  alt="Рецепт создания формы пирога: Josh's More Food"
  description="Рецепт создания формы пирога"
/>

#### Эффекты {#effects-of-pie-crust}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

### Яблочный пирог {#apple-pie}

#### Как приготовить {#how-to-cook-apple-pie}

<ImageZoom
  src="/img/mechanics/more_food/apple_pie.png"
  alt="Рецепт создания яблочного пирога: Josh's More Food"
  description="Рецепт создания яблочного пирога"
/>

#### Эффекты {#effects-of-apple-pie}

- Утоление голода: <HungerSaturationIndicator value={8} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={5} type="saturation"/>

### Морковный пирог {#carrot-pie}

#### Как приготовить {#how-to-cook-carrot-pie}

<ImageZoom
  src="/img/mechanics/more_food/carrot_pie.png"
  alt="Рецепт создания морковного пирога: Josh's More Food"
  description="Рецепт создания морковного пирога"
/>

#### Эффекты {#effects-of-carrot-pie}

- Утоление голода: <HungerSaturationIndicator value={8} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={5} type="saturation"/>

### Сладкий ягодный пирог {#sweet-berry-pie}

#### Как приготовить {#how-to-cook-sweet-berry-pie}

<ImageZoom
  src="/img/mechanics/more_food/sweet_berry_pie.png"
  alt="Рецепт создания сладкого ягодного пирога: Josh's More Food"
  description="Рецепт создания сладкого ягодного пирога"
/>

#### Эффекты {#effects-of-sweet-berry-pie}

- Утоление голода: <HungerSaturationIndicator value={8} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={5} type="saturation"/>

### Пирог пастуха {#shepherds-pie}

#### Как приготовить {#how-to-cook-shepherds-pie}

<ImageZoom
  src="/img/mechanics/more_food/shepherds_pie.png"
  alt="Рецепт создания пирога пастуха: Josh's More Food"
  description="Рецепт создания пирога пастуха"
/>

#### Эффекты {#effects-of-shepherds-pie}

- Утоление голода: <HungerSaturationIndicator value={14} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={17} type="saturation"/>

### Пирог с курицей {#chicken-pot-pie}

#### Как приготовить {#how-to-cook-chicken-pot-pie}

<ImageZoom
  src="/img/mechanics/more_food/chicken_pot_pie.png"
  alt="Рецепт создания пирога с курицей: Josh's More Food"
  description="Рецепт создания пирога с курицей"
/>

#### Эффекты {#effects-of-chicken-pot-pie}

- Утоление голода: <HungerSaturationIndicator value={11} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={11} type="saturation"/>

## Пончики {#doughnuts}

### Шварцвальдский пончик {#black-forest-doughnut}

#### Как приготовить {#how-to-cook-black-forest-doughnut}

<ImageZoom
  src="/img/mechanics/more_food/black_forest_doughnut.png"
  alt="Рецепт создания шварцвальдского пончика: Josh's More Food"
  description="Рецепт создания шварцвальдского пончика"
/>

#### Эффекты {#effects-of-black-forest-doughnut}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

### Шоколадный пончик {#chocolate-doughnut}

#### Как приготовить {#how-to-cook-chocolate-doughnut}

<ImageZoom
  src="/img/mechanics/more_food/chocolate_doughnut.png"
  alt="Рецепт создания шоколадного пончика: Josh's More Food"
  description="Рецепт создания шоколадного пончика"
/>

#### Эффекты {#effects-of-chocolate-doughnut}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

### Пончик с сахаром {#sugar-doughnut}

#### Как приготовить {#how-to-cook-sugar-doughnut}

<ImageZoom
  src="/img/mechanics/more_food/sugar_doughnut.png"
  alt="Рецепт создания пончика с сахаром: Josh's More Food"
  description="Рецепт создания пончика с сахаром"
/>

#### Эффекты {#effects-of-sugar-doughnut}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

## Салаты {#salads}

:::note

В этих рецептах можно использовать <Block.sm item={["acacia_leaves", "azalea_leaves", "birch_leaves", "cherry_leaves", "dark_oak_leaves", "flowering_azalea_leaves", "jungle_leaves", "mangrove_leaves", "oak_leaves", "spruce_leaves" ]} name="Листву любого типа" />.

:::

### Фруктовый салат {#fruit-salad}

#### Как приготовить {#how-to-cook-fruit-salad}

:::note

Можно использовать любые фрукты.

:::

<ImageZoom
  src="/img/mechanics/more_food/fruit_salad.png"
  alt="Рецепт создания фруктового салата: Josh's More Food"
  description="Рецепт создания фруктового салата"
/>

#### Эффекты {#effects-of-fruit-salad}

- Утоление голода: <HungerSaturationIndicator value={7} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={11} type="saturation"/>

### Салат из капусты {#coleslaw}

#### Как приготовить {#how-to-cook-coleslaw}

<ImageZoom
  src="/img/mechanics/more_food/coleslaw.png"
  alt="Рецепт создания салата из капусты: Josh's More Food"
  description="Рецепт создания салата из капусты"
/>

#### Эффекты {#effects-of-coleslaw}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>

### Картофельный салат {#potato-salad}

#### Как приготовить {#how-to-cook-potato-salad}

<ImageZoom
  src="/img/mechanics/more_food/potato_salad.png"
  alt="Рецепт создания картофельного салата: Josh's More Food"
  description="Рецепт создания картофельного салата"
/>

#### Эффекты {#effects-of-potato-salad}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>

### Овощной салат {#vegetable-salad}

#### Как приготовить {#how-to-cook-vegetable-salad}

:::note

Можно использовать любые овощи.

:::

<ImageZoom
  src="/img/mechanics/more_food/vegetable_salad.png"
  alt="Рецепт создания овощного салата: Josh's More Food"
  description="Рецепт создания овощного салата"
/>

#### Эффекты {#effects-of-vegetable-salad}

- Утоление голода: <HungerSaturationIndicator value={7} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={11} type="saturation"/>

### Мясистый салат {#fleshy-salad}

#### Как приготовить {#how-to-cook-fleshy-salad}

<ImageZoom
  src="/img/mechanics/more_food/fleshy_salad.png"
  alt="Рецепт создания овощного салата: Josh's More Food"
  description="Рецепт создания овощного салата"
/>

#### Эффекты {#effects-of-fleshy-salad}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>
- Эффекты: **[Голод I (0:10)] (50%)** и **[Яд I (0:02)] (10%)**

## Мороженое {#ice-cream}

### Арбузное мороженое {#melon-ice-cream}

#### Как приготовить {#how-to-cook-melon-ice-cream}

<ImageZoom
  src="/img/mechanics/more_food/melon_ice_cream.png"
  alt="Рецепт создания арбузного мороженого: Josh's More Food"
  description="Рецепт создания арбузного мороженого"
/>

#### Эффекты {#effects-of-melon-ice-cream}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>
- Эффекты: **[Медлительность I (1:00)]** и **[Слабость I (1:00)]**

### Шоколадное мороженое {#chocolate-ice-cream}

#### Как приготовить {#how-to-cook-chocolate-ice-cream}

<ImageZoom
  src="/img/mechanics/more_food/chocolate_ice_cream.png"
  alt="Рецепт создания шоколадного мороженого: Josh's More Food"
  description="Рецепт создания шоколадного мороженого"
/>

#### Эффекты {#effects-of-chocolate-ice-cream}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>
- Эффекты: **[Медлительность I (1:00)]** и **[Слабость I (1:00)]**

### Яблочное мороженое {#apple-ice-cream}

#### Как приготовить {#how-to-cook-apple-ice-cream}

<ImageZoom
  src="/img/mechanics/more_food/apple_ice_cream.png"
  alt="Рецепт создания яблочного мороженого: Josh's More Food"
  description="Рецепт создания яблочного мороженого"
/>

#### Эффекты {#effects-of-apple-ice-cream}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>
- Эффекты: **[Медлительность I (1:00)]** и **[Слабость I (1:00)]**

### Тыквенное мороженое {#pumpkin-ice-cream}

#### Как приготовить {#how-to-cook-pumpkin-ice-cream}

<ImageZoom
  src="/img/mechanics/more_food/pumpkin_ice_cream.png"
  alt="Рецепт создания тыквенного мороженого: Josh's More Food"
  description="Рецепт создания тыквенного мороженого"
/>

#### Эффекты {#effects-of-pumpkin-ice-cream}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>
- Эффекты: **[Медлительность I (1:00)]** и **[Слабость I (1:00)]**

## Другое {#other-food}

### Рыба и Чипсы {#fish-and-chips}

#### Как приготовить {#how-to-cook-fish-and-chips}

<ImageZoom
  src="/img/mechanics/more_food/fish_and_chips.png"
  alt="Рецепт создания рыбы и чипсов: Josh's More Food"
  description="Рецепт создания рыбы и чипсов"
/>

#### Эффекты {#effects-of-fish-and-chips}

- Утоление голода: <HungerSaturationIndicator value={7} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={11} type="saturation"/>

### Вареное яйцо {#boiled-egg}

#### Как приготовить {#how-to-cook-boiled-egg}

:::note

Для приготовления требуется **вода**.

:::

<ImageZoom
  src="/img/mechanics/more_food/boiled_egg.png"
  alt="Рецепт создания вареного яйца: Josh's More Food"
  description="Рецепт создания вареного яйца"
/>

#### Эффекты {#effects-of-boiled-egg}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

### Жареное яйцо {#fried-egg}

#### Как приготовить {#how-to-cook-fried-egg}

:::note

Для приготовления воды быть **не должно**.

:::

<ImageZoom
  src="/img/mechanics/more_food/fried_egg.png"
  alt="Рецепт создания жареного яйца: Josh's More Food"
  description="Рецепт создания жареного яйца"
/>

#### Эффекты {#effects-of-fried-egg}

- Утоление голода: <HungerSaturationIndicator value={3} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={3} type="saturation"/>

### Крем с молоком {#leche-flan}

#### Как приготовить {#how-to-cook-leche-flan}

<ImageZoom
  src="/img/mechanics/more_food/leche_flan.png"
  alt="Рецепт создания крема с молоком: Josh's More Food"
  description="Рецепт создания крема с молоком"
/>

#### Эффекты {#effects-of-leche-flan}

- Утоление голода: <HungerSaturationIndicator value={6} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={9} type="saturation"/>

### Гнилое рагу {#rotten-stew}

:::tip

<Item.sm item="rotten_stew" name="Гнилое рагу" /> можно использовать вместо гнилой плоти в других рецептах или торговле.

:::

#### Как приготовить {#how-to-cook-rotten-stew}

:::note

Для приготовления требуется **вода**.

:::

<ImageZoom
  src="/img/mechanics/more_food/rotten_stew.png"
  alt="Рецепт создания гнилого рагу: Josh's More Food"
  description="Рецепт создания гнилого рагу"
/>

### Блины {#pancakes}

#### Как приготовить {#how-to-cook-pancakes}

<ImageZoom
  src="/img/mechanics/more_food/pancakes.png"
  alt="Рецепт создания блинов"
  description="Рецепт создания блинов"
/>

#### Эффекты {#effects-of-rotten-stew}

- Утоление голода: <HungerSaturationIndicator value={10} type="hunger"/>
- Насыщение: <HungerSaturationIndicator value={15} type="saturation"/>