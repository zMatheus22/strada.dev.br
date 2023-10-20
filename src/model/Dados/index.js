export function Dados() {
  const ano = new Date().getFullYear();
  const idade = ano - 2002;

  return (
    <section>
      <img src="../../../Matheus.jpeg" />
      <h1>Matheus Vinicyus Strada</h1>
      <p>{idade} Anos</p>
      <section>
        <span class="material-symbols-outlined">home_pin</span>
        <p> Cascavel - PR</p>
      </section>
    </section>
  );
}
