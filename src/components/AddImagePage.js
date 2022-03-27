export default function AddImagePage() {
  return (
    <div className="page add-image">
      <div className="wrapper">
        <div className="input-group">
          <div className="title">Nome</div>
          <input type="text" />
        </div>

        <div className="input-group">
          <div className="title">Descrição</div>
          <input type="text" />
        </div>

        <div className="input-group">
          <div className="title">URL da Imagem</div>
          <input type="text" />
        </div>

        <button className="save-button disabled">Adicionar Imagem</button>
      </div>
    </div>
  );
}
