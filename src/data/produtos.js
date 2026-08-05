import tapiocaImage from "../assets/images/tapioca-carne-sol.jpg";
import cuscuzImage from "../assets/images/cuscuz-nordestino.jpg";
import cafeImage from "../assets/images/cafe-regional.jpg";
import sucoImage from "../assets/images/suco-caju.jpg";
import boloImage from "../assets/images/bolo-macaxeira.jpg";

export const unidades = [
  {
    id: "recife",
    nome: "Recife - Casa Forte",
    descricao: "Unidade completa com cozinha regional e retirada rápida.",
  },
  {
    id: "fortaleza",
    nome: "Fortaleza - Aldeota",
    descricao: "Cardápio reduzido para atendimento rápido.",
  },
  {
    id: "salvador",
    nome: "Salvador - Pituba",
    descricao: "Unidade com bebidas regionais e campanhas sazonais.",
  },
];

const produtos = [
  {
    id: 1,
    nome: "Tapioca de Carne de Sol",
    categoria: "Tapiocas",
    preco: 24.9,
    pontos: 25,
    destaque: "Mais pedido",
    unidades: ["recife", "fortaleza", "salvador"],
    imagem: tapiocaImage,
  },
  {
    id: 2,
    nome: "Cuscuz Nordestino",
    categoria: "Cuscuz",
    preco: 18.9,
    pontos: 19,
    destaque: "Pronto em 12 min",
    unidades: ["recife", "salvador"],
    imagem: cuscuzImage,
  },
  {
    id: 3,
    nome: "Café Regional",
    categoria: "Cafés",
    preco: 8.9,
    pontos: 9,
    destaque: "Combo fidelidade",
    unidades: ["recife", "fortaleza", "salvador"],
    imagem: cafeImage,
  },
  {
    id: 4,
    nome: "Suco de Caju",
    categoria: "Bebidas",
    preco: 12.9,
    pontos: 13,
    destaque: "Natural",
    unidades: ["fortaleza", "salvador"],
    imagem: sucoImage,
  },
  {
    id: 5,
    nome: "Bolo de Macaxeira",
    categoria: "Doces",
    preco: 14.9,
    pontos: 15,
    destaque: "Campanha junina",
    unidades: ["recife", "salvador"],
    imagem: boloImage,
  },
];

export default produtos;
