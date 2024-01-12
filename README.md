# Sistema de Reservas de Hotéis

## Entidade

Hotel {
nome: String,
endereco: String,
quartosDisponiveis: Number,
}

Reserva {
usuario: ObjectId,
hotel: ObjectId,
dataEntrada: Date,
dataSaida: Date,
status: String,
}

Usuario {
nome: String,
email: String,
senha: String,
reservas: ObjectId[],
}

## Funcionalidades

1. **Cadastro de Usuário:**

   -  Um novo usuário se cadastra fornecendo um nome, um endereço de e-mail e uma senha.
   -  Os dados do usuário são validados para garantir que o e-mail seja único.
   -  Um registro do usuário é criado no banco de dados com as informações fornecidas.

2. **Login de Usuário:**

   -  Um usuário registrado insere seu endereço de e-mail e senha.
   -  O sistema verifica se as credenciais estão corretas e autentica o usuário.

3. **Busca de Hotéis:**

   -  Os usuários podem pesquisar hotéis com base em critérios como destino, datas de entrada e saída.
   -  O sistema retorna uma lista de hotéis que atendem aos critérios de busca.

4. **Reserva de Quarto:**

   -  Os usuários podem fazer uma reserva de quarto em um hotel selecionado.
   -  Eles escolhem as datas de entrada e saída.
   -  O sistema verifica a disponibilidade de quartos e confirma a reserva se houver quartos disponíveis.
   -  A reserva é registrada no banco de dados.

5. **Visualização de Reservas do Usuário:**

   -  Os usuários podem visualizar suas reservas atuais.
   -  As informações sobre cada reserva, incluindo hotel, datas e status, são exibidas.

6. **Cancelamento de Reserva:**
   -  Os usuários podem cancelar uma reserva existente antes da data de entrada.
   -  O sistema atualiza o status da reserva e disponibiliza os quartos cancelados novamente para reservas futuras.
