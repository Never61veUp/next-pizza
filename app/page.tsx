import {
  Container,
  Title,
  Categories,
  SortPopUp,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
