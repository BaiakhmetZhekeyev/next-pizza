import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                products={[
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                products={[
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чоризо фреш",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D5FBD0756A6AAA0BBEBA01B343A.avif",
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
