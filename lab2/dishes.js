const dishes = [
  {
      category: 'soup',
      name: 'Гаспачо',
      price: '295',
      weight: '350 гр',
      image: 'gazpacho.jpg',
      dataDish: 'gaspacho',
      kind: 'vegetable'
  },
  {
    category: 'soup',
    name: 'Грибной суп пюре',
    price: '330',
    weight: '350 гр',
    image: 'pureed_mushroom.jpg',
    dataDish: 'pureed_mushroom',
    kind: 'vegetable'
},
  
  {
      category: 'soup',
      name: 'Куриная лапша',
      price: '285',
      weight: '330 гр',
      image: 'chicken_noodles.jpg',
      dataDish: 'chicken_noodles',
      kind: 'meat'
  },
  {
      category: 'soup',
      name: 'Борщ',
      price: '380',
      weight: '350 гр',
      image: 'borsch.jpg',
      dataDish: 'borscht',
      kind: 'meat'
  },
  {
    category: 'soup',
    name: 'Рыбный суп',
    price: '300',
    weight: '320 гр',
    image: 'fish_soup.jpg',
    dataDish: 'fish_soup',
    kind: 'fish'
},
{
    category: 'soup',
    name: 'Том Ям с креветками',
    price: '500',
    weight: '340 гр',
    image: 'tom_yam_with_shrimp.jpg',
    dataDish: 'tom_yam_with_shrimp',
    kind: 'fish'
},

  {
      category: 'mainCourse',
      name: 'Лазанья',
      price: '385',
      weight: '310 гр',
      image: 'lasagna.jpg',
      dataDish: 'lasagna',
      kind: 'meat'
  },
  {
      category: 'mainCourse',
      name: 'Плов',
      price: '350',
      weight: '300 гр',
      image: 'pilaf.jpg',
      dataDish: 'pilaf',
      kind: 'meat'
  },
  {
      category: 'mainCourse',
      name: 'Драники',
      price: '230',
      weight: '250 гр',
      image: 'potato_pancakes.jpg',
      dataDish: 'potato_pancakes',
      kind: 'vegetable'
  },
  {
    category: 'mainCourse',
    name: 'Овощное рагу',
    price: '225',
    weight: '350 гр',
    image: 'vegetable_stew.jpg',
    dataDish: 'vegetable_stew',
    kind: 'vegetable'
},
{
    category: 'mainCourse',
    name: 'Лосось с картофелем',
    price: '520',
    weight: '350 гр',
    image: 'salmon_with_potatoes.jpg',
    dataDish: 'salmon_with_potatoes',
    kind: 'fish'
},
{
    category: 'mainCourse',
    name: 'Паста с креветками',
    price: '490',
    weight: '335 гр',
    image: 'shrimp_pasta.jpg',
    dataDish: 'shrimp_pasta',
    kind: 'fish'
},
{
    category: 'salad',
    name: 'Салат с кальмарами и шампиньонами',
    price: '370',
    weight: '280 гр',
    image: 'Salad_with_squid_and_fried_champignons.jpg',
    dataDish: 'Salad_with_squid_and_fried_champignons',
    kind: 'fish'
},
{
    category: 'salad',
    name: 'Салат цезарь с курицей',
    price: '450',
    weight: '300 гр',
    image: 'Caesar_with_chicken.jpg',
    dataDish: 'Caesar_with_chicken',
    kind: 'meat'
},
{
    category: 'salad',
    name: 'Греческий салат',
    price: '300',
    weight: '290 гр',
    image: 'Greek_salad.jpg',
    dataDish: 'Greek_salad',
    kind: 'vegetable'
},
{
    category: 'salad',
    name: 'Капризе с моцареллой и помидорами',
    price: '340',
    weight: '235 гр',
    image: 'Caprese_with_mozzarella.jpg',
    dataDish: 'Caprese_with_mozzarella',
    kind: 'vegetable'
},
{
    category: 'salad',
    name: 'Рулетики из баклажанов',
    price: '240',
    weight: '210 гр',
    image: 'Eggplant_rolls.jpg',
    dataDish: 'Eggplant_rolls',
    kind: 'vegetable'
},
{
    category: 'salad',
    name: 'Овощной салат',
    price: '240',
    weight: '235 гр',
    image: 'Vegetable_salad.jpg',
    dataDish: 'Vegetable_salad',
    kind: 'vegetable'
},
  {
      category: 'drink',
      name: 'Апельсиновый сок',
      price: '150',
      weight: '200 мл',
      image: 'Orange_juice.jpg',
      dataDish: 'Orange_juice',
      kind: 'cold'
  },
  {
    category: 'drink',
    name: 'Клюквенный морс',
    price: '210',
    weight: '230 мл',
    image: 'fruit_drink.jpg',
    dataDish: 'fruit_drink',
    kind: 'cold'
},
  {
      category: 'drink',
      name: 'Зеленый чай',
      price: '200',
      weight: '250 мл',
      image: 'green_tea.jpg',
      dataDish: 'green_tea',
      kind: 'hot'
  },
  {
    category: 'drink',
    name: 'Черный чай',
    price: '200',
    weight: '250 мл',
    image: 'black_tea.jpg',
    dataDish: 'black_tea',
    kind: 'hot'
},
  
  {
      category: 'drink',
      name: 'Капучино',
      price: '250',
      weight: '250 мл',
      image: 'coffee.jpg',
      dataDish: 'coffee',
      kind: 'hot'
  },
  {
    category: 'drink',
    name: 'Молочный коктейль',
    price: '220',
    weight: '200 мл',
    image: 'milkshake.jpg',
    dataDish: 'milkshake',
    kind: 'cold'
},
  {
    category: 'dessert',
    name: 'Малиновый чизкейк',
    price: '320',
    weight: '180 гр',
    image: 'raspberry_cheesecake.jpg',
    dataDish: 'raspberry_cheesecake',
    kind: 'small'
},
{
    category: 'dessert',
    name: 'Пирожное Анна Павлова',
    price: '340',
    weight: '180 гр',
    image: 'Cake_Anna_Pavlova.jpg',
    dataDish: 'Cake_Anna_Pavlova',
    kind: 'small'
},
{
    category: 'dessert',
    name: 'Шоколадный торт',
    price: '320',
    weight: '170 гр',
    image: 'chocolate_cake.jpg',
    dataDish: 'chocolate_cake',
    kind: 'small'
},
{
    category: 'dessert',
    name: 'Сырники со сметаной',
    price: '350',
    weight: '340 гр',
    image: 'syrniki.jpg',
    dataDish: 'syrniki',
    kind: 'average'
},
{
    category: 'dessert',
    name: 'Венские вафли',
    price: '370',
    weight: '340 гр',
    image: 'Viennese_waffles.jpg',
    dataDish: 'Viennese_waffles',
    kind: 'average'
},
{
    category: 'dessert',
    name: 'Меренговый рулет',
    price: '800',
    weight: '700 гр',
    image: 'Meringue.jpg',
    dataDish: 'Meringue',
    kind: 'big'
}
];
