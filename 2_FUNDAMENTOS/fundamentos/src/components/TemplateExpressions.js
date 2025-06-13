const TemplateExpressions = () => {
  const name = "João";
  const data = {
    age: 30,
    job: "Programador",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você tem {data.age} anos e trabalha como {data.job}.</p>
    </div>
  );
}

export default TemplateExpressions;
