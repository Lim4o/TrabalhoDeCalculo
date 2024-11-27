const lessons = [
    {
        title: "Aula 1: Cálculo da Diferencial com uma variável",
        image: "imagens/imgemAula.jpg",
        summary: "O cálculo da diferencial em funções de uma variável trata do estudo das taxas de variação de uma função quando a variável independente sofre pequenas alterações. A operação principal desse estudo é a derivada, que nos fornece a taxa de variação instantânea de uma função em relação a uma de suas variáveis. Para entender melhor, a diferencial de uma função em um ponto é uma aproximação linear do comportamento da função em torno desse ponto. Essa aproximação é crucial para entender como pequenas variações em um valor de entrada afetam o resultado da função. Matematicamente, a diferencial é expressa como 𝑑 𝑓 ( 𝑥 ) = 𝑓 ′ ( 𝑥 ) 𝑑 𝑥 df(x)=f ′ (x)dx, onde 𝑓 ′ ( 𝑥 ) f ′ (x) é a derivada da função em um ponto 𝑥 x e 𝑑 𝑥 dx representa uma pequena variação na variável independente. A diferencial é usada para estimar mudanças pequenas e aproximar comportamentos de funções complexas em pontos específicos. Além disso, a diferenciação e a utilização de diferenciais são essenciais para o estudo do comportamento local de funções, sendo amplamente aplicada em diversas áreas, como física, economia, biologia, e engenharia. Por exemplo, na física, as diferenciais são fundamentais para entender como a velocidade de um objeto muda com o tempo (derivada da posição em relação ao tempo), ou em economia, para calcular como uma pequena variação no preço de um bem pode influenciar a demanda. Essa aula proporciona os fundamentos para a análise de funções e sua taxa de variação instantânea, o que permite ao aluno calcular o impacto de variações pequenas em uma variável independente em diferentes contextos.",
        exercises: [
            { question: "  f(x) = 3x² + 2x.", solution: "df(x) = (6x + 2)dx." },
            { question: "  f(x) = e^x.", solution: "df(x) = e^x dx." },
            { question: "  f(x) = ln(x).", solution: "df(x) = (1/x)dx." },
            { question: "  f(x) = x³ - 4x + 7.", solution: "df(x) = (3x² - 4)dx." },
            { question: "  f(x) = sin(x).", solution: "df(x) = cos(x)dx." }
        ]
    },
    {
        title: "Aula 2: Conceito e Exemplos de Integrais Indefinidas.",
        image: "imagens/imgemAula.jpg",
        summary: "A integral indefinida é o processo inverso da diferenciação. Ela nos permite encontrar uma função a partir de sua derivada. Quando aplicamos a integral indefinida, buscamos uma função cuja derivada seja igual à função que estamos integrando. O conceito de constante de integração, 'C', surge porque várias funções podem ter a mesma derivada, mas com diferentes valores constantes. O cálculo de integrais indefinidas é uma ferramenta poderosa para resolver problemas de áreas e volumes e para modelar fenômenos contínuos. A integral é essencial não só no estudo da geometria, mas também em várias áreas aplicadas, como a física e a engenharia, onde usamos integrais para calcular o trabalho realizado por uma força ou para determinar a área sob uma curva. Em problemas de física, por exemplo, a integral indefinida é usada para calcular o deslocamento a partir da velocidade de um objeto, enquanto em economia, ela pode ser usada para calcular a área entre a curva de oferta e demanda.",
        exercises: [
            { question: " ∫x² dx.", solution: "F(x) = (1/3)x³ + C." },
            { question: " ∫e^x dx.", solution: "F(x) = e^x + C." },
            { question: " ∫cos(x) dx.", solution: "F(x) = sin(x) + C." },
            { question: " ∫(3x + 2) dx.", solution: "F(x) = (3/2)x² + 2x + C." },
            { question: " ∫(1/x) dx.", solution: "F(x) = ln|x| + C." }
        ]
    },
    {
        title: "Aula 3: Conceito, Notação e Exemplos de Integrais Indefinidas",
        image: "imagens/imgemAula.jpg",
        summary: "Nesta aula, vimos técnicas mais avançadas para resolver integrais indefinidas. Quando as funções a serem integradas não podem ser diretamente integradas com as fórmulas básicas, utilizamos métodos como a substituição e a integração por partes. A substituição envolve a mudança de uma variável para simplificar a integral, enquanto a integração por partes é baseada na regra do produto da diferenciação. Essas técnicas ajudam a resolver integrais mais complexas, frequentemente encontradas em problemas práticos de cálculo. Além disso, a técnica de integração por partes é especialmente útil em problemas envolvendo produtos de funções, como o cálculo de integrais de funções exponenciais multiplicadas por polinômios, e a substituição é crucial quando lidamos com integrais que envolvem funções compostas, como as integrais de funções trigonométricas ou racionais.",
        exercises: [
            { question: " ∫x e^x dx.", solution: "F(x) = (x - 1)e^x + C." },
            { question: " ∫x ln(x) dx.", solution: "F(x) = x ln(x) - x + C." },
            { question: " ∫(x² + 2x) dx.", solution: "F(x) = (1/3)x³ + x² + C." },
            { question: " ∫(3x³ + 5x) dx.", solution: "F(x) = (3/4)x⁴ + (5/2)x² + C." },
            { question: " ∫(cos²(x)) dx.", solution: "F(x) = (x + sin(x)cos(x))/2 + C." }
        ]
    },
    {
        title: "Aula 4: Exemplos e Exercícios de Integrais Indefinidas: Aprofundamento",
        image: "imagens/imgemAula.jpg",
        summary: "Neste estágio, vamos abordar integrais de funções racionais e técnicas avançadas para resolver integrais envolvendo frações algébricas, como a decomposição em frações parciais. Essa técnica é essencial para resolver integrais de funções racionais que não podem ser diretamente integradas. Além disso, vamos aplicar essas técnicas para resolver integrais de funções que envolvem raízes quadradas ou expressões trigonométricas, aumentando nossa capacidade de resolver problemas mais complexos. Vamos também trabalhar com integrais envolvendo expressões algébricas mais difíceis de manipular, como frações com denominadores polinomiais de grau superior e raízes quadradas. Esse aprendizado permitirá resolver problemas de cálculo mais complexos em várias disciplinas, como física, engenharia e economia.",
        exercises: [
            { question: " ∫(1/(x² + 1)) dx.", solution: "F(x) = arctan(x) + C." },
            { question: " ∫(1/(x√(x² + 1))) dx.", solution: "F(x) = ln|x + √(x² + 1)| + C." },
            { question: " ∫(x/(x² + 1)) dx.", solution: "F(x) = (1/2)ln(x² + 1) + C." },
            { question: " ∫(x⁵ dx).", solution: "F(x) = (1/6)x⁶ + C." },
            { question: " ∫(1/(x²)) dx.", solution: "F(x) = -1/x + C." }
        ]
    },
    {
        title: "Aula 5: Conceito, Propriedades e Exemplos de Integrais Definidas",
        image: "imagens/imgemAula.jpg",
        summary: "A integral definida é usada para calcular a área sob a curva de uma função em um intervalo específico. Ao aplicar limites de integração, podemos determinar a área entre a curva e o eixo x entre dois valores. Este conceito é utilizado em diversas áreas da matemática e da física, especialmente em problemas envolvendo áreas, volumes e a soma de infinitos pequenos elementos. Vamos explorar o teorema fundamental do cálculo, que conecta a diferenciação com a integração, e como utilizá-lo para resolver problemas práticos envolvendo integrais definidas. Essa aula será crucial para entender as aplicações de integrais em cenários como o cálculo de trabalho, deslocamento e a determinação de áreas sob curvas.",
        exercises: [
            { question: " ∫₀¹ (x²) dx.", solution: "F(x) = (1/3)[x³]₀¹ = 1/3." },
            { question: " ∫₀² (x³) dx.", solution: "F(x) = (1/4)[x⁴]₀² = 4." },
            { question: " ∫₀π (sin(x)) dx.", solution: "F(x) = [-cos(x)]₀π = 2." },
            { question: " ∫₁⁴ (3x) dx.", solution: "F(x) = (3/2)[x²]₁⁴ = 24." },
            { question: " ∫₀² (x² + 1) dx.", solution: "F(x) = [(1/3)x³ + x]₀² = 10/3." }
        ]
    },
    {
        title: "Aula 6: Aprofundamento em Integrais Definidas: Conceito e Exemplos",
        image: "imagens/imgemAula.jpg",
        summary: "Continuamos com o estudo das integrais definidas, agora com funções mais complexas e com a aplicação do Teorema Fundamental do Cálculo, que estabelece a conexão entre derivadas e integrais. Essa conexão é fundamental para o entendimento profundo de como as integrais podem ser usadas para resolver problemas práticos e teóricos. Vamos explorar integrais com limites variáveis e aplicar o Teorema Fundamental do Cálculo para calcular áreas e volumes com maior precisão. Através de exemplos, vamos trabalhar como usar este teorema para resolver integrais definidas em uma ampla gama de funções.",
        exercises: [
            { question: " ∫₀² (x² + 2x) dx.", solution: "F(x) = [(1/3)x³ + x²]₀² = 10." },
            { question: " ∫₁³ (x³ - 1) dx.", solution: "F(x) = (1/4)[x⁴]₁³ = 20." },
            { question: " ∫₀π/2 (cos(x)) dx.", solution: "F(x) = [sin(x)]₀π/2 = 1." },
            { question: " ∫₀¹ (2x + 3) dx.", solution: "F(x) = [x² + 3x]₀¹ = 4." },
            { question: " ∫₀π (sin²(x)) dx.", solution: "F(x) = π/2." }
        ]
    },
    {
        title: "Aula 7: Conceito e Exemplos de Integrais Definidas: Cálculo de Área",
        image: "imagens/imgemAula.jpg",
        summary: "Nesta aula, exploraramos mais integrais definidas utilizando diferentes técnicas de cálculo, incluindo métodos mais avançados e a resolução de problemas aplicados, como o cálculo de áreas em formas irregulares e a aplicação em física. Vamos ver como aplicar substituições e decomposições para lidar com integrais mais difíceis e interpretar o significado físico por trás dos cálculos. Com isso, o aluno será capaz de resolver integrais com funções mais complexas de forma mais eficiente e precisa.",
        exercises: [
            { question: " ∫₀² (x√(4 - x²)) dx.", solution: "F(x) = (π/2) - 0 = π/2." },
            { question: " ∫₀⁴ (1/(x + 1)) dx.", solution: "F(x) = ln(5) - ln(1) = ln(5)." },
            { question: " ∫₀² (x² + 2x) dx.", solution: "F(x) = 10." },
            { question: " ∫₀³ (3x - 1) dx.", solution: "F(x) = 18." },
            { question: " ∫₀π (sin(x)) dx.", solution: "F(x) = 2." }
        ]
    },
    {
        title: "Aula 8: Conceito e Exemplos de Integrais Definidas: Cálculo de Área entre Curvas",
        image: "imagens/imgemAula.jpg",
        summary: "Na última parte sobre integrais definidas, abordaremos integrais com funções ainda mais complexas e a aplicação de métodos avançados de integração. Vamos revisar e aplicar as técnicas adquiridas ao longo do curso para resolver integrais difíceis e explorar novas maneiras de interpretar o resultado dos cálculos. A aplicação de funções trigonométricas, exponenciais e outras funções não elementares será discutida em profundidade, culminando com problemas complexos que podem ser resolvidos de forma eficiente com os métodos estudados nas aulas anteriores.",
        exercises: [
            { question: " ∫₀² (x³ - 3x) dx.", solution: "F(x) = 4." },
            { question: " ∫₀⁵ (x² + 3x) dx.", solution: "F(x) = 83." },
            { question: " ∫₀π (sin²(x)) dx.", solution: "F(x) = π/2." },
            { question: " ∫₀² (x² - x + 1) dx.", solution: "F(x) = 7." },
            { question: " ∫₀² (1/(x² + 1)) dx.", solution: "F(x) = π/4." }
        ]
    },
    {
        "title": "Aula 9: Cálculo da Diferencial e Integrais",
        "image": "imagens/imgemAula.jpg",
        "summary": "Na Aula 9, abordamos o conceito de diferencial com uma variável, que é fundamental para entender o comportamento de funções em pontos específicos. Em seguida, discutiremos as integrais indefinidas, explorando sua notação, propriedades e exemplos, com ênfase na solução em função da variável e da constante. Também falaremos sobre as integrais definidas, explicando o conceito, notação e propriedades, com destaque para a solução em termos de um valor numérico. Por fim, veremos como calcular áreas utilizando integrais definidas.",
        "exercises": [
            { 
                "question": "∫(4x³ - 6x + 5) dx", 
                "solution": "F(x) = x⁴ - 3x² + 5x + C"
            },
            { 
                "question": "∫(3x² + 2x + 1) dx", 
                "solution": "F(x) = x³ + x² + x + C"
            },
            { 
                "question": "∫₀² (x² - 2x + 1) dx", 
                "solution": "F(x) = 2"
            },
            { 
                "question": "∫₀³ (x³ + x) dx", 
                "solution": "F(x) = 24"
            },
            { 
                "question": "∫₀⁰ (sin(x)) dx", 
                "solution": "F(x) = 0"
            }
        ]
    },
    {
        "title": "Aula 10: Integrais por Integração por Partes",
        "image": "imagens/imgemAula.jpg",
        "summary": "Na Aula 10, abordaremos a técnica de integração por partes, que é uma das ferramentas essenciais para integrar funções mais complexas. Vamos explorar o desenvolvimento das fórmulas básicas e como aplicá-las de forma eficaz. A integração por partes é baseada na fórmula \(\int u \, dv = uv - \int v \, du\), e em nossa aula, vamos aprender como escolher as funções \(u\) e \(dv\) para facilitar a integração de funções que não podem ser integradas diretamente. Serão discutidos exemplos práticos e desafios para aplicar essa técnica de forma eficiente.",
        "exercises": [
            { 
                "question": "∫ x e^x dx", 
                "solution": "F(x) = x e^x - e^x + C"
            },
            { 
                "question": "∫ ln(x) dx", 
                "solution": "F(x) = x ln(x) - x + C"
            },
            { 
                "question": "∫ x² cos(x) dx", 
                "solution": "F(x) = x² sin(x) + 2x cos(x) - 2sin(x) + C"
            },
            { 
                "question": "∫ e^x sin(x) dx", 
                "solution": "F(x) = (1/2)e^x (sin(x) - cos(x)) + C"
            },
            { 
                "question": "∫ x³ ln(x) dx", 
                "solution": "F(x) = (x³ ln(x) - 3/4 x⁴) + C"
            }
        ]
    },
    {
        "title": "Aula 11: Integrais Definidas com a Técnica de Integração por Partes",
        "image": "imagens/imgemAula.jpg",
        "summary": "Na Aula 11, abordaremos a aplicação da técnica de integração por partes em integrais definidas. Vamos explorar como adaptar a fórmula básica de integração por partes para trabalhar com limites de integração. Essa técnica se torna particularmente útil para resolver integrais de funções mais complexas, como produtos de funções algébricas, exponenciais, trigonométricas ou logaritmos. A aplicação de integrais definidas com a técnica de integração por partes é uma habilidade fundamental para resolver problemas de áreas, volumes e outros problemas aplicados.",
        "exercises": [
            { 
                "question": "∫₀¹ x e^x dx", 
                "solution": "F(x) = e - 1"
            },
            { 
                "question": "∫₁² x ln(x) dx", 
                "solution": "F(x) = 2ln(2) - 1"
            },
            { 
                "question": "∫₀π/2 x cos(x) dx", 
                "solution": "F(x) = π/2"
            },
            { 
                "question": "∫₀² x² e^x dx", 
                "solution": "F(x) = 2e² - 5"
            },
            { 
                "question": "∫₁³ x³ ln(x) dx", 
                "solution": "F(x) = 27ln(3) - 45"
            }
        ]
    },

    {
        "title": "Aula 12: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/imgemAula.jpg",
        "summary": "Nesta aula, introduziremos o método de frações parciais para calcular integrais de funções racionais. O foco estará no 1º caso, que trata de funções racionais com denominadores que podem ser decompostos em fatores lineares distintos. Exploraremos a técnica de decomposição e aplicaremos os métodos básicos de integração para resolver exemplos práticos e relevantes.",
        "exercises": [
            { "question": "∫ 1/(x(x+1)) dx.", "solution": "F(x) = ln|x| - ln|x+1| + C." },
            { "question": "∫ (x+2)/(x²+x) dx.", "solution": "F(x) = ln|x| + ln|x+1| + C." },
            { "question": "∫ 1/(x²-1) dx.", "solution": "F(x) = (1/2)ln|x-1| - (1/2)ln|x+1| + C." },
            { "question": "∫ (2x+3)/(x²+x-6) dx.", "solution": "F(x) = ln|x-2| - ln|x+3| + C." },
            { "question": "∫ 1/(x²+3x+2) dx.", "solution": "F(x) = ln|x+1| - ln|x+2| + C." }
        ]
    },


    {
        "title": "Aula 13: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/imgemAula.jpg",
        "summary": "Nesta aula, vamos abordar as integrais de funções racionais utilizando o método de frações parciais, com ênfase no 2º caso. Este caso envolve funções racionais com fatores lineares repetidos no denominador. O objetivo é aprender a decompô-las em frações simples, permitindo uma integração mais direta. Serão discutidas técnicas para resolver integrais com múltiplas repetições e aplicar os resultados em problemas práticos.",
        "exercises": [
            { "question": "∫ 1/(x(x+1)²) dx.", "solution": "F(x) = -1/x + 1/(x+1) - 1/(x+1)² + C." },
            { "question": "∫ 1/(x²(x+2)) dx.", "solution": "F(x) = -1/x + 1/(2x²) - ln|x+2|/2 + C." },
            { "question": "∫ (x+1)/(x²(x+1)²) dx.", "solution": "F(x) = -1/x² + 1/x - 1/(x+1) + ln|x+1| + C." },
            { "question": "∫ 1/(x(x²+1)) dx.", "solution": "F(x) = ln|x|/2 - arctan(x)/2 + C." },
            { "question": "∫ x/(x²(x+1)) dx.", "solution": "F(x) = -1/(2x²) + 1/x - ln|x+1| + C." }
        ]
    },
    

    {
        "title": "Aula 14: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/imgemAula.jpg",
        "summary": "Nesta aula, exploraremos as integrais de funções racionais utilizando o método de frações parciais, focando no desenvolvimento e aplicação das fórmulas básicas de integração. Abordaremos especificamente o 3º e o 4º caso, que envolvem funções racionais com fatores quadráticos irredutíveis e suas potências. O objetivo é consolidar as técnicas já aprendidas e aplicá-las para resolver integrais mais complexas e desafiadoras, destacando a importância deste método em problemas avançados de cálculo.",
        "exercises": [
            { "question": "∫ (x + 2)/(x² + 2x + 2) dx.", "solution": "F(x) = ln(x² + 2x + 2)/2 + C." },
            { "question": "∫ 1/(x³ + x) dx.", "solution": "F(x) = ln|x| - ln|x² + 1|/2 + C." },
            { "question": "∫ (2x + 3)/(x² + 4x + 5) dx.", "solution": "F(x) = ln(x² + 4x + 5)/2 + C." },
            { "question": "∫ x/(x² + 1)² dx.", "solution": "F(x) = -1/(x² + 1) + C." },
            { "question": "∫ 1/(x² + 4) dx.", "solution": "F(x) = (1/2) arctan(x/2) + C." }
        ]
    },

    {
        "title": "Aula 15: Comprimento de Arco e Volume de Sólido de Revolução",
        "image": "imagens/imgemAula.jpg",
        "summary": "Nesta aula, vamos explorar dois importantes tópicos do cálculo integral: o cálculo do comprimento de curvas (ou arco) e o volume de sólidos de revolução. Abordaremos as fórmulas gerais e as técnicas para aplicá-las, resolvendo exemplos práticos. O objetivo é compreender como calcular a extensão de uma curva e determinar volumes gerados pela rotação de funções em torno de eixos coordenados.",
        "exercises": [
            { 
                "question": "∫₁⁴ √(1 + (1/(2√x))²) dx", 
                "solution": "L = ∫₁⁴ √(1 + (1/(2√x))²) dx = ∫₁⁴ √(1 + 1/(4x)) dx. Resolvido, L ≈ 3.478." 
            },
            { 
                "question": "π ∫₀¹ (x²)² dx", 
                "solution": "V = π ∫₀¹ (x²)² dx = π ∫₀¹ x⁴ dx = π[x⁵/5]₀¹ = π/5." 
            },
            { 
                "question": "∫₁ᵉ √(1 + (1/x)²) dx", 
                "solution": "L = ∫₁ᵉ √(1 + (1/x)²) dx = ∫₁ᵉ √(1 + 1/x²) dx ≈ 1.725." 
            },
            { 
                "question": "π ∫₀⁴ (√x)² dx", 
                "solution": "V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π[x²/2]₀⁴ = 8π." 
            },
            { 
                "question": "2π ∫₀² x³x dx", 
                "solution": "V = 2π ∫₀² x³x dx = 2π ∫₀² x⁴ dx = 2π[x⁵/5]₀² = 64π/5." 
            }
        ]
    }
    
];


let currentLesson = 0;

const lessonTitle = document.getElementById("lessonTitle");
const lessonImage = document.getElementById("lessonImage");
const lessonSummary = document.getElementById("lessonSummary");
const lessonExercises = document.getElementById("lessonExercises");
const lessonSelect = document.getElementById("lessonSelect");

function loadLessonOptions() {
    lessons.forEach((lesson, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = lesson.title;
        lessonSelect.appendChild(option);
    });
}

function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    lessonTitle.textContent = lesson.title;
    lessonImage.src = lesson.image;
    lessonSummary.textContent = lesson.summary;

    // Atualiza a lista de exercícios com LaTeX
    lessonExercises.innerHTML = lesson.exercises.map(exercise => {
        return `
            <li>
                <strong>Exercício:</strong> Calcule a diferencial de \\( ${exercise.question} \\)<br>
                <strong>Resolução:</strong> A solução é \\( ${exercise.solution} \\)
            </li>
        `;
    }).join(""); // Converte o array de li's em uma string e adiciona ao innerHTML
    lessonSelect.value = index;

    // Recarrega as equações com MathJax (versão 3.x)
    MathJax.typeset();
}

function navigateLesson(direction) {
    const newIndex = currentLesson + direction;
    if (newIndex >= 0 && newIndex < lessons.length) {
        loadLesson(newIndex);
    }
}

function selectLesson() {
    const selectedLesson = parseInt(lessonSelect.value);
    loadLesson(selectedLesson);
}

loadLessonOptions();
loadLesson(0);