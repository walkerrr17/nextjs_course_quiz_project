import AnswerModel from "@/model/answer"
import QuestionModel from "@/model/question"

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswerModel.isWrong('Abelha'),
        AnswerModel.isWrong('Barata'),
        AnswerModel.isWrong('Pulga'),
        AnswerModel.isRight('Barbeiro'),
    ]),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswerModel.isWrong('Caju'),
        AnswerModel.isWrong('Côco'),
        AnswerModel.isWrong('Chuchu'),
        AnswerModel.isRight('Abóbora'),
    ]),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        AnswerModel.isWrong('Manada'),
        AnswerModel.isWrong('Alcateia'),
        AnswerModel.isWrong('Rebanho'),
        AnswerModel.isRight('Matilha'),
    ]),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.isWrong('Equilátero'),
        AnswerModel.isWrong('Isóceles'),
        AnswerModel.isWrong('Trapézio'),
        AnswerModel.isRight('Escaleno'),
    ]),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        AnswerModel.isWrong('Castro Alves'),
        AnswerModel.isWrong('Manuel Bandeira'),
        AnswerModel.isWrong('Carlos Gomes'),
        AnswerModel.isRight('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        AnswerModel.isWrong('Perder'),
        AnswerModel.isWrong('Fracassar'),
        AnswerModel.isWrong('Desprezar'),
        AnswerModel.isRight('Conseguir'),
    ]),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        AnswerModel.isWrong('Argentina'),
        AnswerModel.isWrong('Espanha'),
        AnswerModel.isWrong('Brasil'),
        AnswerModel.isRight('Portugal'),
    ]),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        AnswerModel.isWrong('Costa e Silva'),
        AnswerModel.isWrong('Emílio Médici'),
        AnswerModel.isWrong('Ernesto Geisel'),
        AnswerModel.isRight('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        AnswerModel.isWrong('Ás'),
        AnswerModel.isWrong('Nove'),
        AnswerModel.isWrong('Rei'),
        AnswerModel.isRight('Valete'),
    ]),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        AnswerModel.isWrong('Vela'),
        AnswerModel.isWrong('Vento'),
        AnswerModel.isWrong('Vênia'),
        AnswerModel.isRight('Veia'),
    ]),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        AnswerModel.isWrong('Abrupção'),
        AnswerModel.isWrong('Abolição'),
        AnswerModel.isWrong('Abnegação'),
        AnswerModel.isRight('Ablução'),
    ]),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        AnswerModel.isWrong('Monte Branco'),
        AnswerModel.isWrong('Monte Fuji'),
        AnswerModel.isWrong('Monte Carlo'),
        AnswerModel.isRight('Monte Everest'),
    ]),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        AnswerModel.isWrong('Estômago'),
        AnswerModel.isWrong('Pâncreas'),
        AnswerModel.isWrong('Rim'),
        AnswerModel.isRight('Pescoço'),
    ]),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        AnswerModel.isWrong('Déficit'),
        AnswerModel.isWrong('Indexação'),
        AnswerModel.isWrong('Indébito'),
        AnswerModel.isRight('Indenização'),
    ]),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        AnswerModel.isWrong('Cuca'),
        AnswerModel.isWrong('Curupira'),
        AnswerModel.isWrong('Boitatá'),
        AnswerModel.isRight('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        AnswerModel.isWrong('Marechal Deodoro'),
        AnswerModel.isWrong('Barão de Mauá'),
        AnswerModel.isWrong('Marquês de Pombal'),
        AnswerModel.isRight('Duque de Caxias'),
    ]),
]

export default questions