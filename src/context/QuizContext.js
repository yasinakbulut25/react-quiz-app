import React, { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function Provider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = {
    A1: [
      {
        id: 1,
        question: "What does 'happy' mean?",
        answers: [
          { answer: "Üzgün", trueAnswer: false },
          { answer: "Sinirli", trueAnswer: false },
          { answer: "Mutlu", trueAnswer: true },
          { answer: "Sıkıcı", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'book' mean?",
        answers: [
          { answer: "Telefon", trueAnswer: false },
          { answer: "Anahtar", trueAnswer: false },
          { answer: "Kitap", trueAnswer: true },
          { answer: "Kalem", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'hot' mean?",
        answers: [
          { answer: "Soğuk", trueAnswer: false },
          { answer: "Sıcak", trueAnswer: true },
          { answer: "Nemli", trueAnswer: false },
          { answer: "Kuru", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'red' mean?",
        answers: [
          { answer: "Kırmızı", trueAnswer: true },
          { answer: "Yeşil", trueAnswer: false },
          { answer: "Mavi", trueAnswer: false },
          { answer: "Sarı", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'cold' mean?",
        answers: [
          { answer: "Sıcak", trueAnswer: false },
          { answer: "Nemli", trueAnswer: false },
          { answer: "Kuru", trueAnswer: false },
          { answer: "Soğuk", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does 'small' mean?",
        answers: [
          { answer: "Büyük", trueAnswer: false },
          { answer: "Küçük", trueAnswer: true },
          { answer: "Yüksek", trueAnswer: false },
          { answer: "Ağır", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What does 'fast' mean?",
        answers: [
          { answer: "Yavaş", trueAnswer: false },
          { answer: "Hızlı", trueAnswer: true },
          { answer: "Uzun", trueAnswer: false },
          { answer: "Kısa", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'big' mean?",
        answers: [
          { answer: "Küçük", trueAnswer: false },
          { answer: "Düşük", trueAnswer: false },
          { answer: "Büyük", trueAnswer: true },
          { answer: "Yüksek", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'long' mean?",
        answers: [
          { answer: "Kısa", trueAnswer: false },
          { answer: "Hızlı", trueAnswer: false },
          { answer: "Yavaş", trueAnswer: false },
          { answer: "Uzun", trueAnswer: true },
        ],
      },
      {
        id: 10,
        question: "What does 'old' mean?",
        answers: [
          { answer: "Genç", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
          { answer: "Yaşlı", trueAnswer: true },
          { answer: "Çirkin", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What does 'new' mean?",
        answers: [
          { answer: "Yeni", trueAnswer: true },
          { answer: "Eski", trueAnswer: false },
          { answer: "Kirli", trueAnswer: false },
          { answer: "Temiz", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does 'fast food' mean?",
        answers: [
          { answer: "Sağlıklı yemek", trueAnswer: false },
          { answer: "Lezzetli yemek", trueAnswer: false },
          { answer: "Pahalı yemek", trueAnswer: false },
          { answer: "Hızlı yemek", trueAnswer: true },
        ],
      },
      {
        id: 13,
        question: "What does 'quiet' mean?",
        answers: [
          { answer: "Gürültülü", trueAnswer: false },
          { answer: "Sessiz", trueAnswer: true },
          { answer: "Canlı", trueAnswer: false },
          { answer: "Sakin", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does 'fat' mean?",
        answers: [
          { answer: "Zayıf", trueAnswer: false },
          { answer: "Şişman", trueAnswer: true },
          { answer: "Uzun", trueAnswer: false },
          { answer: "Kısa", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'expensive' mean?",
        answers: [
          { answer: "Ucuz", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
          { answer: "Pahalı", trueAnswer: true },
          { answer: "Kötü", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does 'cheap' mean?",
        answers: [
          { answer: "Ucuz", trueAnswer: true },
          { answer: "Pahalı", trueAnswer: false },
          { answer: "Kötü", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'worried' mean?",
        answers: [
          { answer: "Üzgün", trueAnswer: false },
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Sıkıntılı", trueAnswer: false },
          { answer: "Endişeli", trueAnswer: true },
        ],
      },
      {
        id: 18,
        question: "What does 'sad' mean?",
        answers: [
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
          { answer: "Kötü", trueAnswer: false },
          { answer: "Üzgün", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'watch' mean?",
        answers: [
          { answer: "Bakmak", trueAnswer: false },
          { answer: "Korkmak", trueAnswer: false },
          { answer: "İzlemek", trueAnswer: true },
          { answer: "Uyumak", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'sleep' mean?",
        answers: [
          { answer: "Kaçmak", trueAnswer: false },
          { answer: "Uyumak", trueAnswer: true },
          { answer: "Koşmak", trueAnswer: false },
          { answer: "Oturmak", trueAnswer: false },
        ],
      },
    ],
    A2: [
      {
        id: 1,
        question: "What does 'ability' mean?",
        answers: [
          { answer: "Kabiliyet", trueAnswer: true },
          { answer: "Kısa", trueAnswer: false },
          { answer: "Yorgun", trueAnswer: false },
          { answer: "Zeki", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'accept' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Birleştirmek", trueAnswer: false },
          { answer: "Kabul etmek", trueAnswer: true },
          { answer: "Ayrılmak", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'achieve' mean?",
        answers: [
          { answer: "Kaybetmek", trueAnswer: false },
          { answer: "Başarmak", trueAnswer: true },
          { answer: "Savaşmak", trueAnswer: false },
          { answer: "Dinlenmek", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'add' mean?",
        answers: [
          { answer: "Eklemek", trueAnswer: true },
          { answer: "Çıkarmak", trueAnswer: false },
          { answer: "Karıştırmak", trueAnswer: false },
          { answer: "Kırmak", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'advantage' mean?",
        answers: [
          { answer: "Dezavantaj", trueAnswer: false },
          { answer: "Sorun", trueAnswer: false },
          { answer: "Başarı", trueAnswer: false },
          { answer: "Avantaj", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does 'apologize' mean?",
        answers: [
          { answer: "Övmek", trueAnswer: false },
          { answer: "Teşvik etmek", trueAnswer: false },
          { answer: "Hediye vermek", trueAnswer: false },
          { answer: "Özür dilemek", trueAnswer: true },
        ],
      },
      {
        id: 7,
        question: "What does 'attract' mean?",
        answers: [
          { answer: "Kurtarmak", trueAnswer: false },
          { answer: "Yardım etmek", trueAnswer: false },
          { answer: "Çekmek", trueAnswer: true },
          { answer: "Sevmek", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'begin' mean?",
        answers: [
          { answer: "Bitirmek", trueAnswer: false },
          { answer: "Başlamak", trueAnswer: true },
          { answer: "Konuşmak", trueAnswer: false },
          { answer: "Düşünmek", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'believe' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Saldırmak", trueAnswer: false },
          { answer: "İnanmak", trueAnswer: true },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'build' mean?",
        answers: [
          { answer: "İnşa etmek", trueAnswer: true },
          { answer: "Yıkıp yok etmek", trueAnswer: false },
          { answer: "Savaşmak", trueAnswer: false },
          { answer: "Yükseltmek", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What does 'call' mean?",
        answers: [
          { answer: "Görmek", trueAnswer: false },
          { answer: "Uygun", trueAnswer: false },
          { answer: "Tutuklamak", trueAnswer: false },
          { answer: "Aramak", trueAnswer: true },
        ],
      },
      {
        id: 12,
        question: "What does 'care' mean?",
        answers: [
          { answer: "Vermek", trueAnswer: false },
          { answer: "Beklemek", trueAnswer: false },
          { answer: "İlgilenmek", trueAnswer: true },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'catch' mean?",
        answers: [
          { answer: "Ayrılmak", trueAnswer: false },
          { answer: "Anlamak", trueAnswer: false },
          { answer: "Yakalamak", trueAnswer: true },
          { answer: "Yapmak", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does 'choose' mean?",
        answers: [
          { answer: "Kabul etmek", trueAnswer: false },
          { answer: "Seçmek", trueAnswer: true },
          { answer: "Yanıt vermek", trueAnswer: false },
          { answer: "Reddetmek", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'clean' mean?",
        answers: [
          { answer: "Kirletmek", trueAnswer: false },
          { answer: "Bakmak", trueAnswer: false },
          { answer: "Kırmak", trueAnswer: false },
          { answer: "Temizlemek", trueAnswer: true },
        ],
      },
      {
        id: 16,
        question: "What does 'close' mean?",
        answers: [
          { answer: "Kapatmak", trueAnswer: true },
          { answer: "Açmak", trueAnswer: false },
          { answer: "İzlemek", trueAnswer: false },
          { answer: "Birleştirmek", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'cook' mean?",
        answers: [
          { answer: "Boşaltmak", trueAnswer: false },
          { answer: "Pişirmek", trueAnswer: true },
          { answer: "Sıkışmak", trueAnswer: false },
          { answer: "Görmek", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'count' mean?",
        answers: [
          { answer: "Bulmak", trueAnswer: false },
          { answer: "Vurmak", trueAnswer: false },
          { answer: "Yenmek", trueAnswer: false },
          { answer: "Saymak", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'cry' mean?",
        answers: [
          { answer: "Gülümsemek", trueAnswer: false },
          { answer: "Kızgın olmak", trueAnswer: false },
          { answer: "Ağlamak", trueAnswer: true },
          { answer: "Korkmak", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'cut' mean?",
        answers: [
          { answer: "Kesmek", trueAnswer: true },
          { answer: "Yapıştırmak", trueAnswer: false },
          { answer: "Bozmak", trueAnswer: false },
          { answer: "Satmak", trueAnswer: false },
        ],
      },
    ],
    B1: [
      {
        id: 1,
        question: "What does 'accommodation' mean?",
        answers: [
          { answer: "Yemek", trueAnswer: false },
          { answer: "Giyim", trueAnswer: false },
          { answer: "Konaklama", trueAnswer: true },
          { answer: "İş", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does 'adventure' mean?",
        answers: [
          { answer: "Dostluk", trueAnswer: false },
          { answer: "Macera", trueAnswer: true },
          { answer: "Aşk", trueAnswer: false },
          { answer: "Başarı", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What does 'anxious' mean?",
        answers: [
          { answer: "Endişeli", trueAnswer: true },
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Sakin", trueAnswer: false },
          { answer: "Korkmuş", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does 'career' mean?",
        answers: [
          { answer: "Okul", trueAnswer: false },
          { answer: "Aile", trueAnswer: false },
          { answer: "Sağlık", trueAnswer: false },
          { answer: "Kariyer", trueAnswer: true },
        ],
      },
      {
        id: 5,
        question: "What does 'comfortable' mean?",
        answers: [
          { answer: "Zor", trueAnswer: false },
          { answer: "Rahat", trueAnswer: true },
          { answer: "Sıcak", trueAnswer: false },
          { answer: "Ağrılı", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "What does 'culture' mean?",
        answers: [
          { answer: "Spor", trueAnswer: false },
          { answer: "Kültür", trueAnswer: true },
          { answer: "Yiyecek", trueAnswer: false },
          { answer: "Doğa", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What does 'deduction' mean?",
        answers: [
          { answer: "Tahmin", trueAnswer: false },
          { answer: "Gözlem", trueAnswer: false },
          { answer: "Çıkarım", trueAnswer: true },
          { answer: "Bağış", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does 'empathy' mean?",
        answers: [
          { answer: "Empati", trueAnswer: true },
          { answer: "Hoşgörü", trueAnswer: false },
          { answer: "Takdir", trueAnswer: false },
          { answer: "Sorgulama", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'frustration' mean?",
        answers: [
          { answer: "Başarı", trueAnswer: false },
          { answer: "Heyecan", trueAnswer: false },
          { answer: "Hayal kırıklığı", trueAnswer: true },
          { answer: "Enerji", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does 'globalization' mean?",
        answers: [
          { answer: "Bölgeselleşme", trueAnswer: false },
          { answer: "Millileşme", trueAnswer: false },
          { answer: "Uzaklaşma", trueAnswer: false },
          { answer: "Küreselleşme", trueAnswer: true },
        ],
      },
      {
        id: 11,
        question: "What does 'hypothesis' mean?",
        answers: [
          { answer: "Kanıt", trueAnswer: false },
          { answer: "Sonuç", trueAnswer: false },
          { answer: "Hipotez", trueAnswer: true },
          { answer: "Öneri", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does 'inevitable' mean?",
        answers: [
          { answer: "Kaçınılmaz", trueAnswer: true },
          { answer: "Gerekli", trueAnswer: false },
          { answer: "Olağan", trueAnswer: false },
          { answer: "Yanıltıcı", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'justify' mean?",
        answers: [
          { answer: "Reddetmek", trueAnswer: false },
          { answer: "Düşünmek", trueAnswer: false },
          { answer: "Değiştirmek", trueAnswer: false },
          { answer: "Doğrulamak", trueAnswer: true },
        ],
      },
      {
        id: 14,
        question: "What does 'knowledge' mean?",
        answers: [
          { answer: "Bilgi", trueAnswer: true },
          { answer: "İnanç", trueAnswer: false },
          { answer: "Düşünce", trueAnswer: false },
          { answer: "Deneyim", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What does 'independent' mean?",
        answers: [
          { answer: "Mutlu", trueAnswer: false },
          { answer: "Bağımsız", trueAnswer: true },
          { answer: "Zayıf", trueAnswer: false },
          { answer: "Dinç", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does 'opportunity' mean?",
        answers: [
          { answer: "Zorluk", trueAnswer: false },
          { answer: "Fırsat", trueAnswer: true },
          { answer: "Hedef", trueAnswer: false },
          { answer: "Güzel", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What does 'responsible' mean?",
        answers: [
          { answer: "Kıskanç", trueAnswer: false },
          { answer: "Sevgi dolu", trueAnswer: false },
          { answer: "Sorumlu", trueAnswer: true },
          { answer: "Cesur", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does 'sufficient' mean?",
        answers: [
          { answer: "Zor", trueAnswer: false },
          { answer: "Kötü", trueAnswer: false },
          { answer: "Zengin", trueAnswer: false },
          { answer: "Yeterli", trueAnswer: true },
        ],
      },
      {
        id: 19,
        question: "What does 'tradition' mean?",
        answers: [
          { answer: "Dans", trueAnswer: false },
          { answer: "Gelenek", trueAnswer: true },
          { answer: "Güzel", trueAnswer: false },
          { answer: "Müzik", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does 'vocabulary' mean?",
        answers: [
          { answer: "Resim", trueAnswer: false },
          { answer: "Kelime hazinesi", trueAnswer: true },
          { answer: "Kitap", trueAnswer: false },
          { answer: "Yemek tarifi", trueAnswer: false },
        ],
      },
    ],
    B2: [
      {
        id: 1,
        question: "What does 'acquaintance' mean?",
        answers: [
          { answer: "Tanışıklık", trueAnswer: true },
          { answer: "Eşlik", trueAnswer: false },
          { answer: "Özgünlük", trueAnswer: false },
          { answer: "Çıkarım", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "Which one is the meaning of 'consequence'?",
        answers: [
          { answer: "Mantık", trueAnswer: false },
          { answer: "Sonuç", trueAnswer: true },
          { answer: "Soruşturma", trueAnswer: false },
          { answer: "Tedavi", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of 'nervous'?",
        answers: [
          { answer: "Tembel", trueAnswer: false },
          { answer: "Hırslı", trueAnswer: false },
          { answer: "Sinirli", trueAnswer: true },
          { answer: "Çalışkan", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "Which one is the meaning of 'Complicated'?",
        answers: [
          { answer: "Karmaşık", trueAnswer: true },
          { answer: "Basit", trueAnswer: false },
          { answer: "Ayrıntılı", trueAnswer: false },
          { answer: "Hızlı", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What does 'fluctuate' mean?",
        answers: [
          { answer: "Değişkenlik göstermek", trueAnswer: true },
          { answer: "İzlemek", trueAnswer: false },
          { answer: "İddia etmek", trueAnswer: false },
          { answer: "Harcamak", trueAnswer: false },
        ],
      },
      {
        id: 6,
        question: "Which one is the meaning of 'humble'?",
        answers: [
          { answer: "Alçakgönüllü", trueAnswer: true },
          { answer: "Dürüst", trueAnswer: false },
          { answer: "Kibirli", trueAnswer: false },
          { answer: "Akıllı", trueAnswer: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of 'incorporate'?",
        answers: [
          { answer: "Ayırmak", trueAnswer: false },
          { answer: "Küçülmek", trueAnswer: false },
          { answer: "İçermek", trueAnswer: true },
          { answer: "Anlaşmak", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "Which one is the meaning of 'justifiable'?",
        answers: [
          { answer: "Sorgulanabilir", trueAnswer: false },
          { answer: "Kabul edilebilir", trueAnswer: true },
          { answer: "Yenilmez", trueAnswer: false },
          { answer: "Makul", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What does 'legacy' mean?",
        answers: [
          { answer: "Mirasa konmak", trueAnswer: false },
          { answer: "Tarih", trueAnswer: false },
          { answer: "Miras bırakmak", trueAnswer: false },
          { answer: "Kalıt", trueAnswer: true },
        ],
      },
      {
        id: 10,
        question: "Which one is the meaning of 'manifest'?",
        answers: [
          { answer: "Gizli", trueAnswer: false },
          { answer: "Açık", trueAnswer: true },
          { answer: "İstenmeyen", trueAnswer: false },
          { answer: "Özür dilemek", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of 'notorious'?",
        answers: [
          { answer: "Ünlü", trueAnswer: false },
          { answer: "Gizemli", trueAnswer: false },
          { answer: "Kötü ün salmış", trueAnswer: true },
          { answer: "Sevgi dolu", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "Which one is the meaning of 'obstruct'?",
        answers: [
          { answer: "Engellemek", trueAnswer: true },
          { answer: "Onaylamak", trueAnswer: false },
          { answer: "Arttırmak", trueAnswer: false },
          { answer: "Saldırmak", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What does 'profound' mean?",
        answers: [
          { answer: "Anlamsız", trueAnswer: false },
          { answer: "Derin", trueAnswer: true },
          { answer: "Galiz", trueAnswer: false },
          { answer: "Kaba", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "Which one is the meaning of 'rational'?",
        answers: [
          { answer: "Mantıklı", trueAnswer: true },
          { answer: "İkna edici", trueAnswer: false },
          { answer: "Karanlık", trueAnswer: false },
          { answer: "Küçültülmüş", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of 'speculate'?",
        answers: [
          { answer: "Kurban etmek", trueAnswer: false },
          { answer: "Aksettirmek", trueAnswer: false },
          { answer: "Tahmin etmek", trueAnswer: true },
          { answer: "Söz vermek", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "Which one is the meaning of 'trivial'?",
        answers: [
          { answer: "Zorla yapılan", trueAnswer: false },
          { answer: "Değerli", trueAnswer: false },
          { answer: "Utangaç", trueAnswer: false },
          { answer: "Önemsiz", trueAnswer: true },
        ],
      },
      {
        id: 17,
        question: "What does 'ultimate' mean?",
        answers: [
          { answer: "Nihai", trueAnswer: true },
          { answer: "Gecikmiş", trueAnswer: false },
          { answer: "Çarpıcı", trueAnswer: false },
          { answer: "Dikkate değmez", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "Which one is the meaning of 'vague'?",
        answers: [
          { answer: "Kaba", trueAnswer: false },
          { answer: "Net olmayan", trueAnswer: true },
          { answer: "Yaşlı", trueAnswer: false },
          { answer: "Adil", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of 'widespread'?",
        answers: [
          { answer: "Kısıtlı", trueAnswer: false },
          { answer: "Yaygın", trueAnswer: true },
          { answer: "Farklı", trueAnswer: false },
          { answer: "Azalmış", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "Which one is the meaning of 'vivid'?",
        answers: [
          { answer: "Canlı", trueAnswer: true },
          { answer: "Büyüleyici", trueAnswer: false },
          { answer: "Karışık", trueAnswer: false },
          { answer: "Olumsuz", trueAnswer: false },
        ],
      },
    ],
    C1: [
      {
        id: 1,
        question: "What is the meaning of the word 'conjecture'?",
        answers: [
          { answer: "gerçek", trueAnswer: false },
          { answer: "tahmin", trueAnswer: true },
          { answer: "yalan", trueAnswer: false },
          { answer: "karar", trueAnswer: false },
        ],
      },
      {
        id: 2,
        question: "What does the word 'diligent' mean?",
        answers: [
          { answer: "tembel", trueAnswer: false },
          { answer: "çalışkan", trueAnswer: true },
          { answer: "yavaş", trueAnswer: false },
          { answer: "kaygılı", trueAnswer: false },
        ],
      },
      {
        id: 3,
        question: "What is the meaning of the word 'elaborate'?",
        answers: [
          { answer: "basit", trueAnswer: false },
          { answer: "karmaşık", trueAnswer: true },
          { answer: "sıkıcı", trueAnswer: false },
          { answer: "uygun", trueAnswer: false },
        ],
      },
      {
        id: 4,
        question: "What does the word 'feasible' mean?",
        answers: [
          { answer: "mantıklı", trueAnswer: true },
          { answer: "anlamsız", trueAnswer: false },
          { answer: "tehlikeli", trueAnswer: false },
          { answer: "garip", trueAnswer: false },
        ],
      },
      {
        id: 5,
        question: "What is the meaning of the word 'gregarious'?",
        answers: [
          { answer: "kendine dönük", trueAnswer: false },
          { answer: "samimi", trueAnswer: false },
          { answer: "güvenilir", trueAnswer: false },
          { answer: "sosyal", trueAnswer: true },
        ],
      },
      {
        id: 6,
        question: "What does the word 'hackneyed' mean?",
        answers: [
          { answer: "orijinal", trueAnswer: false },
          { answer: "sıkıcı", trueAnswer: true },
          { answer: "güçlü", trueAnswer: false },
          { answer: "zararsız", trueAnswer: false },
        ],
        trueAnswer: "sıkıcı",
      },
      {
        id: 7,
        question: "What is the meaning of the word 'imminent'?",
        answers: [
          { answer: "gizli", trueAnswer: false },
          { answer: "olması yakın", trueAnswer: true },
          { answer: "açık", trueAnswer: false },
          { answer: "başarılı", trueAnswer: false },
        ],
      },
      {
        id: 8,
        question: "What does the word 'inquisitive' mean?",
        answers: [
          { answer: "meraklı", trueAnswer: true },
          { answer: "korkak", trueAnswer: false },
          { answer: "aşırı", trueAnswer: false },
          { answer: "kendine güvenen", trueAnswer: false },
        ],
      },
      {
        id: 9,
        question: "What is the meaning of the word 'juxtapose'?",
        answers: [
          { answer: "birleştirmek", trueAnswer: false },
          { answer: "ayrı tutmak", trueAnswer: false },
          { answer: "yan yana koymak", trueAnswer: true },
          { answer: "düşman yapmak", trueAnswer: false },
        ],
      },
      {
        id: 10,
        question: "What does the word 'keen' mean?",
        answers: [
          { answer: "anlamsız", trueAnswer: false },
          { answer: "kararlı", trueAnswer: false },
          { answer: "keskin", trueAnswer: true },
          { answer: "huzursuz", trueAnswer: false },
        ],
      },
      {
        id: 11,
        question: "What is the meaning of the word 'lucid'?",
        answers: [
          { answer: "belirsiz", trueAnswer: false },
          { answer: "karanlık", trueAnswer: false },
          { answer: "anlaşılır", trueAnswer: true },
          { answer: "çoklu", trueAnswer: false },
        ],
      },
      {
        id: 12,
        question: "What does the word 'malleable' mean?",
        answers: [
          { answer: "uyumsuz", trueAnswer: false },
          { answer: "esnek", trueAnswer: true },
          { answer: "düzensiz", trueAnswer: false },
          { answer: "dostça", trueAnswer: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'nostalgia'?",
        answers: [
          { answer: "özlem", trueAnswer: true },
          { answer: "kin", trueAnswer: false },
          { answer: "heyecan", trueAnswer: false },
          { answer: "küçümseme", trueAnswer: false },
        ],
      },
      {
        id: 14,
        question: "What does the word 'obscure' mean?",
        answers: [
          { answer: "açık", trueAnswer: false },
          { answer: "belirsiz", trueAnswer: true },
          { answer: "anlaşılır", trueAnswer: false },
          { answer: "övülmüş", trueAnswer: false },
        ],
      },
      {
        id: 15,
        question: "What is the meaning of the word 'pensive'?",
        answers: [
          { answer: "düşünceli", trueAnswer: true },
          { answer: "korkak", trueAnswer: false },
          { answer: "neşeli", trueAnswer: false },
          { answer: "şüpheli", trueAnswer: false },
        ],
      },
      {
        id: 16,
        question: "What does the word 'quaint' mean?",
        answers: [
          { answer: "gösterişli", trueAnswer: false },
          { answer: "yabancı", trueAnswer: false },
          { answer: "tuhaftır", trueAnswer: true },
          { answer: "yüksek", trueAnswer: false },
        ],
      },
      {
        id: 17,
        question: "What is the meaning of the word 'applaud'?",
        answers: [
          { answer: "iyimser", trueAnswer: false },
          { answer: "dayanıklı", trueAnswer: false },
          { answer: "Alkışlamak", trueAnswer: true },
          { answer: "aptal", trueAnswer: false },
        ],
      },
      {
        id: 18,
        question: "What does the word 'superfluous' mean?",
        answers: [
          { answer: "gerekli", trueAnswer: false },
          { answer: "gereksiz", trueAnswer: true },
          { answer: "başarılı", trueAnswer: false },
          { answer: "talihsiz", trueAnswer: false },
        ],
      },
      {
        id: 19,
        question: "What is the meaning of the word 'tedious'?",
        answers: [
          { answer: "heyecanlı", trueAnswer: false },
          { answer: "sıkıcı", trueAnswer: true },
          { answer: "anlamsız", trueAnswer: false },
          { answer: "sorunlu", trueAnswer: false },
        ],
      },
      {
        id: 20,
        question: "What does the word 'diminish' mean?",
        answers: [
          { answer: "nadir", trueAnswer: false },
          { answer: "Azaltmak", trueAnswer: true },
          { answer: "kötü niyetli", trueAnswer: false },
          { answer: "ünlü", trueAnswer: false },
        ],
      },
    ],
    C2: [
      {
        id: 1,
        question: "What is the meaning of the word 'abundant'?",
        answers: [
          { answer: "yetersiz", trueAnswerr: false },
          { answer: "kısıtlı", trueAnswerr: false },
          { answer: "dar", trueAnswerr: false },
          { answer: "bol", trueAnswerr: true },
        ],
      },
      {
        id: 2,
        question: "What does the word 'exquisite' mean?",
        answers: [
          { answer: "iğrenç", trueAnswerr: false },
          { answer: "yumuşak", trueAnswerr: false },
          { answer: "zarif", trueAnswerr: true },
          { answer: "keskin", trueAnswerr: false },
        ],
      },
      {
        id: 3,
        question: "What is the definition of 'conundrum'?",
        answers: [
          { answer: "bulmaca", trueAnswerr: true },
          { answer: "basit problem", trueAnswerr: false },
          { answer: "çoklu seçenek", trueAnswerr: false },
          { answer: "doğru cevap", trueAnswerr: false },
        ],
      },
      {
        id: 4,
        question: "What is the meaning of the word 'elated'?",
        answers: [
          { answer: "ümitli", trueAnswerr: false },
          { answer: "üzgün", trueAnswerr: false },
          { answer: "coşkulu", trueAnswerr: true },
          { answer: "sinirli", trueAnswerr: false },
        ],
      },
      {
        id: 5,
        question: "What does the word 'affluent' mean?",
        answers: [
          { answer: "fakir", trueAnswerr: false },
          { answer: "zengin", trueAnswerr: true },
          { answer: "yorgun", trueAnswerr: false },
          { answer: "sağlıklı", trueAnswerr: false },
        ],
      },
      {
        id: 6,
        question: "What is the definition of 'exasperate'?",
        answers: [
          { answer: "şaşırmak", trueAnswerr: false },
          { answer: "korkutmak", trueAnswerr: false },
          { answer: "öfkelendirmek", trueAnswerr: true },
          { answer: "rahatlatmak", trueAnswerr: false },
        ],
      },
      {
        id: 7,
        question: "What is the meaning of the word 'resilient'?",
        answers: [
          { answer: "kırılgan", trueAnswerr: false },
          { answer: "uyumlu", trueAnswerr: false },
          { answer: "zayıf", trueAnswerr: false },
          { answer: "dayanıklı", trueAnswerr: true },
        ],
      },
      {
        id: 8,
        question: "What does the word 'ominous' mean?",
        answers: [
          { answer: "tuhaf", trueAnswerr: false },
          { answer: "iyimser", trueAnswerr: false },
          { answer: "tehlikeli", trueAnswerr: true },
          { answer: "yıkıcı", trueAnswerr: false },
        ],
      },
      {
        id: 9,
        question: "What is the definition of 'scrutinize'?",
        answers: [
          { answer: "gözlemlemek", trueAnswerr: false },
          { answer: "dışlamak", trueAnswerr: false },
          { answer: "incelemek", trueAnswerr: true },
          { answer: "hızlandırmak", trueAnswerr: false },
        ],
      },
      {
        id: 10,
        question: "What is the meaning of the word 'prolific'?",
        answers: [
          { answer: "verimli", trueAnswerr: true },
          { answer: "dikkatsiz", trueAnswerr: false },
          { answer: "zayıf", trueAnswerr: false },
          { answer: "önemsiz", trueAnswerr: false },
        ],
      },
      {
        id: 11,
        question: "What does the word 'impeccable' mean?",
        answers: [
          { answer: "kötü", trueAnswerr: false },
          { answer: "hatasız", trueAnswerr: true },
          { answer: "endişeli", trueAnswerr: false },
          { answer: "sevgi dolu", trueAnswerr: false },
        ],
      },
      {
        id: 12,
        question: "What is the definition of 'perplexed'?",
        answers: [
          { answer: "şaşkın", trueAnswerr: true },
          { answer: "sıkılmış", trueAnswerr: false },
          { answer: "korkmuş", trueAnswerr: false },
          { answer: "özgüvenli", trueAnswerr: false },
        ],
      },
      {
        id: 13,
        question: "What is the meaning of the word 'mundane'?",
        answers: [
          { answer: "anlamsız", trueAnswerr: false },
          { answer: "eğlenceli", trueAnswerr: false },
          { answer: "özgün", trueAnswerr: false },
          { answer: "sıradan", trueAnswerr: true },
        ],
      },
      {
        id: 14,
        question: "What does the word 'quintessential' mean?",
        answers: [
          { answer: "temel", trueAnswerr: true },
          { answer: "karmaşık", trueAnswerr: false },
          { answer: "kaba", trueAnswerr: false },
          { answer: "havalı", trueAnswerr: false },
        ],
      },
      {
        id: 15,
        question: "What is the definition of the word 'ephemeral'?",
        answers: [
          { answer: "geçici", trueAnswerr: true },
          { answer: "kalıcı", trueAnswerr: false },
          { answer: "kötü", trueAnswerr: false },
          { answer: "yararlı", trueAnswerr: false },
        ],
      },
      {
        id: 16,
        question: "What is the meaning of the word 'verbose'?",
        answers: [
          { answer: "anlaşılır", trueAnswerr: false },
          { answer: "kesin", trueAnswerr: false },
          { answer: "açık", trueAnswerr: false },
          { answer: "aşırı sözlü", trueAnswerr: true },
        ],
      },
      {
        id: 17,
        question: "What does the word 'quell' mean?",
        answers: [
          { answer: "yaralamak", trueAnswerr: false },
          { answer: "yapıştırmak", trueAnswerr: false },
          { answer: "yatıştırmak", trueAnswerr: true },
          { answer: "yükseltmek", trueAnswerr: false },
        ],
      },
      {
        id: 18,
        question: "What is the meaning of the word 'ennui'?",
        answers: [
          { answer: "heyecan", trueAnswerr: false },
          { answer: "can sıkıntısı", trueAnswerr: true },
          { answer: "mutluluk", trueAnswerr: false },
          { answer: "merak", trueAnswerr: false },
        ],
      },
      {
        id: 19,
        question: "What does the word 'idiosyncrasy' mean?",
        answers: [
          { answer: "deneyim", trueAnswerr: false },
          { answer: "alışkanlık", trueAnswerr: false },
          { answer: "tuhaflık", trueAnswerr: true },
          { answer: "zeka", trueAnswerr: false },
        ],
      },
      {
        id: 20,
        question: "What is the meaning of the word 'ubiquitous'?",
        answers: [
          { answer: "anlık", trueAnswerr: false },
          { answer: "evrensel", trueAnswerr: true },
          { answer: "sınırlı", trueAnswerr: false },
          { answer: "belirgin", trueAnswerr: false },
        ],
      },
    ],
  };

  const sharedValuesAndMethods = {
    questions,
    currentQuestion,
    setCurrentQuestion,
  };

  return (
    <QuizContext.Provider value={sharedValuesAndMethods}>
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContext = () => useContext(QuizContext);
export { Provider, useQuizContext };
export default QuizContext;
