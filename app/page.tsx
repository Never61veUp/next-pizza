'use client'
import { Container, Title, TopBar, Filter } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";
import React from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState("");
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
            <Filter />
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList title={"Пиццы"} items={[{
                id: 1,
                name: 'Сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 2,
                name: 'Пепперони',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 3,
                name: 'Двойной цыпленок',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 4,
                name: 'Креветки со сладким чили',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB595A197C24BA932A0AD1144AFB.avif',
                price: 550,
                items: [{price: 550}],
                
              }
              ]} categoryId={1} />
              <ProductGroupList title={"Напитки"} items={[{
                id: 1,
                name: 'Какао',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE79702DC5EA0EBF92E2483DB89B11.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 2,
                name: 'Апельсиновый сок Rich',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B223E75EB71498BCAA0D4A0D.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 3,
                name: 'Апельсиновый сок Rich',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B223E75EB71498BCAA0D4A0D.avif',
                price: 550,
                items: [{price: 550}],
                
              },
              {
                id: 4,
                name: 'Таежный чай, 10 пакетиков',
                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797026C5FA9A8298F6EBED364569.avif',
                price: 550,
                items: [{price: 550}],
                
              }
              ]} categoryId={2} />
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
