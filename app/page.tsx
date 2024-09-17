import {
  Container,
  Title,
  TopBar,
  Filter,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Filter/>
          </div>

          {/* Product List */}
          <div className="flex-1">
              <div className="flex flex-col gap-16">
                Список товаров
              </div>
          </div>
        </div>
      </Container>
      
      
    </>
  );
}
