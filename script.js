const lessons = [
    {
        "title": "Resumo",
        "image": "imagens/resumocalculo.png",
        "summary": "O Cálculo 2 é uma disciplina essencial que aprofunda o estudo do Cálculo Diferencial e Integral, com foco em integrais, séries e suas aplicações. Este resumo aborda os principais conceitos, propriedades e métodos de integração, explorando integrais indefinidas e definidas, além de técnicas avançadas como frações parciais e integrais por partes. A integração é crucial para resolver problemas envolvendo áreas, volumes e modelagem de fenômenos físicos e matemáticos. As integrais indefinidas são utilizadas para encontrar a antiderivada de funções, resultando em uma família de soluções expressa em função da constante de integração \(C\). Já as integrais definidas são usadas para calcular áreas sob curvas, e o Teorema Fundamental do Cálculo facilita a avaliação de integrais com limites. O estudo de técnicas de integração, como substituição trigonométrica, frações parciais e integração por partes, permite resolver problemas mais complexos. As aplicações de Cálculo 2 incluem o cálculo de comprimento de arco, volumes de sólidos de revolução e áreas entre curvas, sendo amplamente utilizado em física, engenharia e ciências computacionais."
    },
    {
        "title": "Aula 1: Cálculo da Diferencial com uma variável",
        "image": "imagens/aula1.png",
        "summary": "O cálculo da diferencial em funções de uma variável trata do estudo das taxas de variação de uma função quando a variável independente sofre pequenas alterações. A operação principal desse estudo é a derivada, que nos fornece a taxa de variação instantânea de uma função em relação a uma de suas variáveis. Para entender melhor, a diferencial de uma função em um ponto é uma aproximação linear do comportamento da função em torno desse ponto. Essa aproximação é crucial para entender como pequenas variações em um valor de entrada afetam o resultado da função. Matematicamente, a diferencial é expressa como \\( df(x) = f'(x) dx \\), onde \\( f'(x) \\) é a derivada da função em um ponto \\( x \\) e \\( dx \\) representa uma pequena variação na variável independente. A diferencial é usada para estimar mudanças pequenas e aproximar comportamentos de funções complexas em pontos específicos. Além disso, a diferenciação e a utilização de diferenciais são essenciais para o estudo do comportamento local de funções, sendo amplamente aplicada em diversas áreas, como física, economia, biologia, e engenharia. Por exemplo, na física, as diferenciais são fundamentais para entender como a velocidade de um objeto muda com o tempo (derivada da posição em relação ao tempo), ou em economia, para calcular como uma pequena variação no preço de um bem pode influenciar a demanda. Essa aula proporciona os fundamentos para a análise de funções e sua taxa de variação instantânea, o que permite ao aluno calcular o impacto de variações pequenas em uma variável independente em diferentes contextos.",
        "exercises": [
            { 
                "question": "f(x) = 3x² + 2x",
                "steps": [
                    "Identifique os termos: \\( 3x² \\) e \\( 2x \\).",
                    "Diferencie \\( 3x² \\) usando a regra do expoente: \\( 2 \\cdot 3x^{2-1} = 6x \\).",
                    "Diferencie \\( 2x \\): A derivada de \\( x \\) é \\( 1 \\), então \\( 2 \\cdot 1 = 2 \\).",
                    "Combine os resultados.",
                    "Multiplique por \\( dx \\)."
                ],
                "solution": "df(x) = (6x + 2) dx." 
            },
            {
                "question": "f(x) = e^x",
                "steps": [
                    "Identifique que \\( e^x \\) é uma função exponencial.",
                    "A derivada de \\( e^x \\) é ela mesma, \\( e^x \\).",
                    "Multiplique por \\( dx \\)."
                ],
                "solution": "df(x) = e^x dx."
            },
            {
                "question": "f(x) = ln(x)",
                "steps": [
                    "Identifique que \\( \\ln(x) \\) é uma função logarítmica.",
                    "A derivada de \\( \\ln(x) \\) é dada por \\( 1/x \\).",
                    "Multiplique por \\( dx \\)."
                ],
                "solution": "df(x) = (1/x) dx."
            },
            {
                "question": "f(x) = x^3 - 4x + 7",
                "steps": [
                    "Identifique os termos: \\( x^3 \\), \\( -4x \\), e \\( 7 \\).",
                    "Diferencie \\( x^3 \\) usando a regra do expoente: \\( 3x^{3-1} = 3x^2 \\).",
                    "Diferencie \\( -4x \\): A derivada de \\( x \\) é \\( 1 \\), então \\( -4 \\cdot 1 = -4 \\).",
                    "Diferencie a constante \\( 7 \\): A derivada de uma constante é \\( 0 \\).",
                    "Combine os resultados.",
                    "Multiplique por \\( dx \\)."
                ],
                "solution": "df(x) = (3x^2 - 4) dx."
            },
            {
                "question": "f(x) = sin(x)",
                "steps": [
                    "Identifique que \\( \\sin(x) \\) é uma função trigonométrica.",
                    "A derivada de \\( \\sin(x) \\) é \\( \\cos(x) \\).",
                    "Multiplique por \\( dx \\)."
                ],
                "solution": "df(x) = \\cos(x) dx."
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center>
        
        Com o cálculo diferencial, é possível determinar a velocidade instantânea** de um objeto, analisando a taxa de variação da posição em relação ao tempo. Por exemplo, dado o movimento de um carro, a derivada da função posição fornece a velocidade em qualquer instante específico.
        `,
    },
    {
        "title": "Aula 2: Conceito e Exemplos de Integrais Indefinidas.",
        "image": "imagens/aula.png",
        "summary": "A integral indefinida é o processo inverso da diferenciação. Ela nos permite encontrar uma função a partir de sua derivada. Quando aplicamos a integral indefinida, buscamos uma função cuja derivada seja igual à função que estamos integrando. O conceito de constante de integração, 'C', surge porque várias funções podem ter a mesma derivada, mas com diferentes valores constantes. O cálculo de integrais indefinidas é uma ferramenta poderosa para resolver problemas de áreas e volumes e para modelar fenômenos contínuos. A integral é essencial não só no estudo da geometria, mas também em várias áreas aplicadas, como a física e a engenharia, onde usamos integrais para calcular o trabalho realizado por uma força ou para determinar a área sob uma curva. Em problemas de física, por exemplo, a integral indefinida é usada para calcular o deslocamento a partir da velocidade de um objeto, enquanto em economia, ela pode ser usada para calcular a área entre a curva de oferta e demanda.",
        "exercises": [
            {
                "question": " \\int x^2 dx.",
                "steps": [
                    "Identifique a função a ser integrada: \\( x^2 \\).",
                    "Aplique a regra da potência para integrais: \\( \\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\), onde \\( n = 2 \\).",
                    "Substitua na fórmula: \\( \\frac{x^{2+1}}{2+1} = \\frac{x^3}{3} \\)."
                ],
                "solution": "\( F(x) = \\frac{1}{3}x^3 + C \)."
            },
            {
                "question": " \\int e^x dx.",
                "steps": [
                    "Identifique que \\( e^x \\) é uma função exponencial.",
                    "A integral de \\( e^x \\) é ela mesma: \\( \\int e^x dx = e^x + C \\)."
                ],
                "solution": "\( F(x) = e^x + C \)."
            },
            {
                "question": " \\int cos(x) dx.",
                "steps": [
                    "Identifique que \\( cos(x) \\) é uma função trigonométrica.",
                    "A integral de \\( cos(x) \\) é \\( sin(x) \\)."
                ],
                "solution": "\( F(x) = sin(x) + C \)."
            },
            {
                "question": " \\int (3x + 2) dx.",
                "steps": [
                    "Divida a integral em duas partes: \\( \\int (3x + 2) dx = \\int 3x dx + \\int 2 dx \\).",
                    "Integre \\( 3x \\): \\( \\int 3x dx = \\frac{3x^2}{2} \\).",
                    "Integre \\( 2 \\): \\( \\int 2 dx = 2x \\)."
                ],
                "solution": "\( F(x) = \\frac{3}{2}x^2 + 2x + C \)."
            },
            {
                "question": " \\int \\frac{1}{x} dx.",
                "steps": [
                    "Identifique que \\( \\frac{1}{x} \\) é uma função logarítmica.",
                    "A integral de \\( \\frac{1}{x} \\) é \\( \\ln|x| \\)."
                ],
                "solution": "F(x) = ln|x| + C."
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center>

        As integrais indefinidas possuem aplicações fundamentais na física, engenharia e outras áreas científicas, especialmente para modelar fenômenos dinâmicos. Por exemplo, ao determinar a posição de um objeto em movimento, a integral da função velocidade fornece a expressão geral da posição, incluindo informações sobre as condições iniciais.
        
        Da mesma forma, em engenharia, as integrais são usadas para calcular forças acumuladas em estruturas, enquanto na economia ajudam a prever funções de custo ou receita cumulativa a partir de taxas de variação conhecidas.
        
        Essa técnica é essencial para resolver problemas que envolvem a recuperação de funções originais a partir de suas taxas de variação observadas.`,
        
    },
    {
        "title": "Aula 3: Conceito, Notação e Exemplos de Integrais Indefinidas",
        "image": "imagens/aula3.png",
        "summary": "Nesta aula, vimos técnicas mais avançadas para resolver integrais indefinidas. Quando as funções a serem integradas não podem ser diretamente integradas com as fórmulas básicas, utilizamos métodos como a substituição e a integração por partes. A substituição envolve a mudança de uma variável para simplificar a integral, enquanto a integração por partes é baseada na regra do produto da diferenciação. Essas técnicas ajudam a resolver integrais mais complexas, frequentemente encontradas em problemas práticos de cálculo. Além disso, a técnica de integração por partes é especialmente útil em problemas envolvendo produtos de funções, como o cálculo de integrais de funções exponenciais multiplicadas por polinômios, e a substituição é crucial quando lidamos com integrais que envolvem funções compostas, como as integrais de funções trigonométricas ou racionais.",
        "exercises": [
            {
                "question": " \\int x e^x dx.",
                "steps": [
                    "Esta é uma integral do tipo produto de duas funções. Vamos usar a regra de integração por partes: \\( \\int u dv = uv - \\int v du \\).",
                    "Escolha \\( u = x \\) e \\( dv = e^x dx \\).",
                    "Agora, calcule \\( du = dx \\) e \\( v = e^x \\).",
                    "Aplique a fórmula da integração por partes: \\( \\int x e^x dx = x e^x - \\int e^x dx \\).",
                    "A integral de \\( e^x \\) é \\( e^x \\)."
                ],
                "solution": "\(F(x) = (x - 1)e^x + C\)"
            },
            {
                "question": " \\int x \\ln(x) dx.",
                "steps": [
                    "Esta é uma integral do tipo produto. Vamos usar a integração por partes.",
                    "Escolha \\( u = \\ln(x) \\) e \\( dv = x dx \\).",
                    "Agora, calcule \\( du = \\frac{1}{x} dx \\) e \\( v = \\frac{x^2}{2} \\).",
                    "Aplique a fórmula da integração por partes: \\( \\int u dv = uv - \\int v du \\)."
                ],
                "solution": "\(F(x) = x ln(x) - x + C\)"
            },
            {
                "question": " \\int (x^2 + 2x) dx.",
                "steps": [
                    "Divida a integral em duas partes: \\( \\int (x^2 + 2x) dx = \\int x^2 dx + \\int 2x dx \\).",
                    "Integre \\( x^2 \\): \\( \\int x^2 dx = \\frac{x^3}{3} \\).",
                    "Integre \\( 2x \\): \\( \\int 2x dx = x^2 \\)."
                ],
                "solution": "\(F(x) = (1/3)x³ + x² + C.\)"
            },
            {
                "question": " \\int (3x^3 + 5x) dx.",
                "steps": [
                    "Divida a integral em duas partes: \\( \\int (3x^3 + 5x) dx = \\int 3x^3 dx + \\int 5x dx \\).",
                    "Integre \\( 3x^3 \\): \\( \\int 3x^3 dx = \\frac{3x^4}{4} \\).",
                    "Integre \\( 5x \\): \\( \\int 5x dx = \\frac{5x^2}{2} \\)."
                ],
                "solution": "\(F(x) = (3/4)x⁴ + (5/2)x² + C\)"
            },
            {
                "question": " \\int \\cos^2(x) dx.",
                "steps": [
                    "Para integrar \\( \\cos^2(x) \\), use a identidade trigonométrica: \\( \\cos^2(x) = \\frac{1 + \\cos(2x)}{2} \\).",
                    "Substitua na integral: \\( \\int \\cos^2(x) dx = \\int \\frac{1 + \\cos(2x)}{2} dx \\).",
                    "Agora, integre \\( 1/2 \\) e \\( \\cos(2x) \\)."
                ],
                "solution": "\(F(x) = (x + sin(x)cos(x))/2 + C\)"
            }
        ],
        "aplication" : `
        <center><h3>Aplicação</h3></center>

        O cálculo diferencial permite analisar o movimento de objetos, determinando grandezas como velocidade e aceleração instantâneas. Por exemplo, ao modelar o movimento de um carro, a função posição \( s(t) \), que relaciona a posição ao tempo \( t \), pode ser derivada para obter a velocidade \( s'(t) \) em um instante específico. A segunda derivada, \( s''(t) \), fornece a aceleração, ajudando a entender como o movimento está mudando ao longo do tempo. Essa análise é essencial em áreas como engenharia automotiva e física.

        `,
    },   
    {
        "title": "Aula 4: Exemplos e Exercícios de Integrais Indefinidas: Aprofundamento",
        "image": "imagens/aula4.png",
        "summary": "Neste estágio, vamos abordar integrais de funções racionais e técnicas avançadas para resolver integrais envolvendo frações algébricas, como a decomposição em frações parciais. Essa técnica é essencial para resolver integrais de funções racionais que não podem ser diretamente integradas. Além disso, vamos aplicar essas técnicas para resolver integrais de funções que envolvem raízes quadradas ou expressões trigonométricas, aumentando nossa capacidade de resolver problemas mais complexos. Vamos também trabalhar com integrais envolvendo expressões algébricas mais difíceis de manipular, como frações com denominadores polinomiais de grau superior e raízes quadradas. Esse aprendizado permitirá resolver problemas de cálculo mais complexos em várias disciplinas, como física, engenharia e economia.",
        "exercises": [
            {
                "question": " ∫(1/(x² + 1)) dx.",
                "steps": [
                    "Esta é uma integral clássica que resulta em uma função trigonométrica inversa.",
                    "Reconheça que \\( \\int \\frac{1}{x^2 + 1} dx = \\arctan(x) + C \\)."
                ],
                "solution": "F(x) = arctan(x) + C."
            },
            {
                "question": " ∫(1/(x√(x² + 1))) dx.",
                "steps": [
                    "Use a substituição trigonométrica, substituindo \\( x = \sinh(t) \\).",
                    "Isso resulta na integral \\( \\int \\frac{1}{x\\sqrt{x^2 + 1}} dx \\) que simplifica para uma função logaritmica.",
                    "A solução final é: \\( \\ln|x + \sqrt{x^2 + 1}| + C \\)."
                ],
                "solution": "F(x) = ln|x + √(x² + 1)| + C."
            },
            {
                "question": " ∫(x/(x² + 1)) dx.",
                "steps": [
                    "Esta integral pode ser resolvida por substituição simples.",
                    "Escolha \\( u = x^2 + 1 \\), logo \\( du = 2x dx \\).",
                    "A integral se torna \\( \\frac{1}{2} \\int \\frac{du}{u} \\), que é uma integral básica.",
                    "A solução final é \\( \\frac{1}{2} \\ln(x^2 + 1) + C \\)."
                ],
                "solution": "F(x) = (1/2)ln(x² + 1) + C."
            },
            {
                "question": " ∫(x⁵ dx).",
                "steps": [
                    "Para integrar \\( x^5 \\), aplique a regra da potência: \\( \\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\).",
                    "Aqui, \\( n = 5 \\), então a integral se torna \\( \\frac{x^6}{6} + C \\)."
                ],
                "solution": "F(x) = (1/6)x⁶ + C."
            },
            {
                "question": " ∫(1/(x²)) dx.",
                "steps": [
                    "Esta é uma integral de uma função racional simples.",
                    "Reconheça que \\( \\int \\frac{1}{x^2} dx = -\\frac{1}{x} + C \\)."
                ],
                "solution": "F(x) = -1/x + C."
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center>
        

    A integral indefinida é uma ferramenta fundamental para resolver problemas que envolvem encontrar funções primitivas ou determinar funções desconhecidas a partir de suas taxas de variação. Por exemplo, ao analisar o movimento de uma partícula, se conhecemos a velocidade \( v(t) \) em função do tempo \( t \), a posição \( s(t) \) pode ser encontrada integrando \( v(t) \).  

    Outra aplicação relevante está em situações de crescimento ou decaimento exponencial, onde, dada a taxa de crescimento \( f'(x) \), pode-se determinar a função original \( f(x) \) que descreve o comportamento do sistema. Essas técnicas são amplamente empregadas na modelagem de fenômenos em engenharia, economia e ciências naturais.
        `,
    },
    {
        "title": "Aula 5: Conceito, Propriedades e Exemplos de Integrais Definidas",
        "image": "imagens/aula5.png",
        "summary": "A integral definida é usada para calcular a área sob a curva de uma função em um intervalo específico. Ao aplicar limites de integração, podemos determinar a área entre a curva e o eixo x entre dois valores. Este conceito é utilizado em diversas áreas da matemática e da física, especialmente em problemas envolvendo áreas, volumes e a soma de infinitos pequenos elementos. Vamos explorar o teorema fundamental do cálculo, que conecta a diferenciação com a integração, e como utilizá-lo para resolver problemas práticos envolvendo integrais definidas. Essa aula será crucial para entender as aplicações de integrais em cenários como o cálculo de trabalho, deslocamento e a determinação de áreas sob curvas.",
        "exercises": [
            {
                "question": " ∫₀¹ (x²) dx.",
                "steps": [
                    "A integral definida é resolvida aplicando o teorema fundamental do cálculo.",
                    "Primeiro, calcule a integral indefinida de \\( x^2 \\), que é \\( \\frac{x^3}{3} \\).",
                    "Agora, aplique os limites de integração: substitua \\( x = 1 \\) e \\( x = 0 \\) na expressão \\( \\frac{x^3}{3} \\)."
                ],
                "solution": "F(x) = (1/3)[x³]₀¹ = 1/3."
            },
            {
                "question": " ∫₀² (x³) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( x^3 \\), que é \\( \\frac{x^4}{4} \\).",
                    "Depois, aplique os limites de integração: substitua \\( x = 2 \\) e \\( x = 0 \\) na expressão \\( \\frac{x^4}{4} \\)."
                ],
                "solution": "F(x) = (1/4)[x⁴]₀² = 4."
            },
            {
                "question": " ∫₀π (sin(x)) dx.",
                "steps": [
                    "A integral definida de \\( \sin(x) \\) é resolvida pela integral indefinida de \\( \\sin(x) \\), que é \\( -\cos(x) \\).",
                    "Substitua os limites \\( x = \\pi \\) e \\( x = 0 \\) na expressão \\( -\\cos(x) \\)."
                ],
                "solution": "F(x) = [-cos(x)]₀π = 2."
            },
            {
                "question": " ∫₁⁴ (3x) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( 3x \\), que é \\( \\frac{3x^2}{2} \\).",
                    "Depois, aplique os limites de integração: substitua \\( x = 4 \\) e \\( x = 1 \\) na expressão \\( \\frac{3x^2}{2} \\)."
                ],
                "solution": "F(x) = (3/2)[x²]₁⁴ = 24."
            },
            {
                "question": " ∫₀² (x² + 1) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( x^2 + 1 \\), que é \\( \\frac{x^3}{3} + x \\).",
                    "Depois, aplique os limites de integração: substitua \\( x = 2 \\) e \\( x = 0 \\) na expressão \\( \\frac{x^3}{3} + x \\)."
                ],
                "solution": "F(x) = [(1/3)x³ + x]₀² = 10/3."
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center>
        A integral definida é amplamente utilizada para calcular áreas, volumes e totais acumulados em diversos contextos. Por exemplo, ao calcular a área sob uma curva, a integral definida fornece o valor acumulado entre os limites de integração. Em física, pode ser usada para determinar a quantidade de trabalho realizado por uma força ao longo de uma distância ou para calcular o movimento de objetos sob aceleração variável. Em engenharia, é fundamental para o cálculo de momentos de inércia e para determinar o volume de sólidos com formas complexas. Além disso, integrais definidas são essenciais em economia para calcular receitas, custos e outras grandezas acumulativas ao longo do tempo.`,
    },
    {
        "title": "Aula 6: Aprofundamento em Integrais Definidas: Conceito e Exemplos",
        "image": "imagens/aula6.png",
        "summary": "Continuamos com o estudo das integrais definidas, agora com funções mais complexas e com a aplicação do Teorema Fundamental do Cálculo, que estabelece a conexão entre derivadas e integrais. Essa conexão é fundamental para o entendimento profundo de como as integrais podem ser usadas para resolver problemas práticos e teóricos. Vamos explorar integrais com limites variáveis e aplicar o Teorema Fundamental do Cálculo para calcular áreas e volumes com maior precisão. Através de exemplos, vamos trabalhar como usar este teorema para resolver integrais definidas em uma ampla gama de funções.",
        "exercises": [
            {
                "question": " ∫₀² (x² + 2x) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( x^2 \\), que é \\( \\frac{x^3}{3} \\).",
                    "Depois, calcule a integral indefinida de \\( 2x \\), que é \\( x^2 \\).",
                    "A integral definida de \\( x^2 \\) no intervalo de 0 a 2 é \\( \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3} \\).",
                    "A integral definida de \\( 2x \\) no intervalo de 0 a 2 é \\( [x^2]_0^2 = 4 - 0 = 4 \\).",
                    "Somando os resultados, temos \\( \\frac{8}{3} + 4 = 10 \\)."
                ],
                "solution": "F(x) = \\left[ \\frac{x^3}{3} + x^2 \\right]_0^2 = 10."
            },
            {
                "question": " ∫₁³ (x³ - 1) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( x^3 \\), que é \\( \\frac{x^4}{4} \\).",
                    "Depois, calcule a integral indefinida de \\( 1 \\), que é \\( x \\).",
                    "A integral definida de \\( x^3 \\) no intervalo de 1 a 3 é \\( \\left[ \\frac{x^4}{4} \\right]_1^3 = \\frac{81}{4} - \\frac{1}{4} = \\frac{80}{4} = 20 \\).",
                    "A integral definida de \\( 1 \\) no intervalo de 1 a 3 é \\( [x]_1^3 = 3 - 1 = 2 \\).",
                    "Subtraindo os resultados, temos \\( 20 - 2 = 20 \\)."
                ],
                "solution": "F(x) = \\frac{1}{4}[x^4]_1^3 = 20."
            },
            {
                "question": " ∫₀π/2 (cos(x)) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( cos(x) \\), que é \\( sin(x) \\).",
                    "A integral definida de \\( cos(x) \\) no intervalo de 0 a \\( \\frac{\\pi}{2} \\) é \\( [sin(x)]_0^{\\frac{\\pi}{2}} = sin(\\frac{\\pi}{2}) - sin(0) = 1 - 0 = 1 \\)."
                ],
                "solution": "F(x) = [sin(x)]_0^{\\frac{\\pi}{2}} = 1."
            },
            {
                "question": " ∫₀¹ (2x + 3) dx.",
                "steps": [
                    "Primeiro, calcule a integral indefinida de \\( 2x \\), que é \\( x^2 \\).",
                    "Depois, calcule a integral indefinida de \\( 3 \\), que é \\( 3x \\).",
                    "A integral definida de \\( 2x \\) no intervalo de 0 a 1 é \\( [x^2]_0^1 = 1^2 - 0^2 = 1 \\).",
                    "A integral definida de \\( 3 \\) no intervalo de 0 a 1 é \\( [3x]_0^1 = 3(1) - 3(0) = 3 \\).",
                    "Somando os resultados, temos \\( 1 + 3 = 4 \\)."
                ],
                "solution": "F(x) = [x^2 + 3x]_0^1 = 4."
            },
            {
                "question": " ∫₀π (sin²(x)) dx.",
                "steps": [
                    "Use a identidade trigonométrica \\( sin^2(x) = \\frac{1 - cos(2x)}{2} \\).",
                    "Substitua na integral: \\( \\int_0^\\pi \\sin^2(x) dx = \\int_0^\\pi \\frac{1 - cos(2x)}{2} dx \\).",
                    "Integre \\( \\frac{1}{2} \\) sobre o intervalo de 0 a \\( \\pi \\): \\( \\int_0^\\pi \\frac{1}{2} dx = \\frac{\\pi}{2} \\).",
                    "A integral de \\( -\\frac{cos(2x)}{2} \\) é \\( \\frac{sin(2x)}{4} \\), então \\( \\left[ \\frac{sin(2x)}{4} \\right]_0^\\pi = 0 \\).",
                    "Somando os resultados, temos \\( \\frac{\\pi}{2} + 0 = \\frac{\\pi}{2} \\)."
                ],
                "solution": "F(x) = \\frac{\\pi}{2}."
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center> 
        O aprofundamento em integrais definidas é essencial para entender como essas ferramentas podem ser aplicadas em problemas complexos em diversas áreas. Em física, por exemplo, a integral definida é usada para calcular a quantidade de trabalho realizado por uma força ao longo de um deslocamento, ou a energia potencial em um sistema de partículas. Em engenharia, as integrais definidas são fundamentais para o cálculo de momentos de inércia e áreas de materiais com formas irregulares. Na economia, elas ajudam a modelar fluxos de receitas e custos ao longo do tempo, permitindo a análise de fenômenos como o crescimento de investimentos ou a previsão de demanda de produtos. Esse aprofundamento também é usado em biologia para modelar o crescimento populacional, e em estatística, para calcular probabilidades em distribuições contínuas.`,
    },
    {
        "title": "Aula 7: Conceito e Exemplos de Integrais Definidas: Cálculo de Área",
        "image": "imagens/aula7.png",
        "summary": "Nesta aula, exploraremos mais integrais definidas utilizando diferentes técnicas de cálculo, incluindo métodos mais avançados e a resolução de problemas aplicados, como o cálculo de áreas em formas irregulares e a aplicação em física. Vamos ver como aplicar substituições e decomposições para lidar com integrais mais difíceis e interpretar o significado físico por trás dos cálculos. Com isso, o aluno será capaz de resolver integrais com funções mais complexas de forma mais eficiente e precisa.",
        "exercises": [
            {
                "question": " ∫₀² (x\\sqrt{4 - x²}) dx.",
                "steps": [
                    "Para resolver essa integral, podemos usar a substituição trigonométrica, onde \\( x = 2\\sin(\\theta) \\), com \\( dx = 2\\cos(\\theta)d\\theta \\).",
                    "Substituindo na integral: \\( \\int_0^2 x\\sqrt{4 - x^2} dx = \\int_0^{\\pi/2} 2\\sin(\\theta)\\cdot 2\\cos(\\theta) d\\theta = 4\\int_0^{\\pi/2} \\sin(\\theta)\\cos(\\theta) d\\theta \\).",
                    "Usando a identidade \\( \\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta) \\), a integral se torna \\( 2\\int_0^{\\pi/2} \\sin(2\\theta) d\\theta \\).",
                    "A integral de \\( \\sin(2\\theta) \\) é \\( -\\frac{1}{2} \\cos(2\\theta) \\), portanto \\( 2[-\\frac{1}{2}\\cos(2\\theta)]_0^{\\pi/2} = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2} \\)."
                ],
                "solution": "F(x) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2}."
            },
            {
                "question": " ∫₀⁴ \\frac{1}{x + 1} dx.",
                "steps": [
                    "Essa integral é uma integral logarítmica, onde a integral de \\( \\frac{1}{x + 1} \\) é \\( \\ln(|x + 1|) \\).",
                    "Substituindo os limites: \\( \\int_0^4 \\frac{1}{x + 1} dx = \\left[ \\ln(|x + 1|) \\right]_0^4 = \\ln(5) - \\ln(1) = \\ln(5)."
                ],
                "solution": "F(x) = \\ln(5) - \\ln(1) = \\ln(5)."
            },
            {
                "question": " ∫₀² (x² + 2x) dx.",
                "steps": [
                    "Primeiro, separamos a integral em duas partes: \\( \\int_0^2 x^2 dx + \\int_0^2 2x dx \\).",
                    "A integral de \\( x^2 \\) é \\( \\frac{x^3}{3} \\), então \\( \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3} \\).",
                    "A integral de \\( 2x \\) é \\( x^2 \\), então \\( [x^2]_0^2 = 4 - 0 = 4 \\).",
                    "Somando os resultados: \\( \\frac{8}{3} + 4 = 10 \\)."
                ],
                "solution": "F(x) = 10."
            },
            {
                "question": " ∫₀³ (3x - 1) dx.",
                "steps": [
                    "Primeiro, separamos a integral em duas partes: \\( \\int_0^3 3x dx - \\int_0^3 1 dx \\).",
                    "A integral de \\( 3x \\) é \\( \\frac{3x^2}{2} \\), então \\( \\left[ \\frac{3x^2}{2} \\right]_0^3 = \\frac{3(9)}{2} - 0 = \\frac{27}{2} = 13.5 \\).",
                    "A integral de \\( 1 \\) é \\( x \\), então \\( [x]_0^3 = 3 - 0 = 3 \\).",
                    "Subtraindo os resultados: \\( 13.5 - 3 = 18 \\)."
                ],
                "solution": "F(x) = 18."
            },
            {
                "question": " ∫₀π (sin(x)) dx.",
                "steps": [
                    "A integral de \\( \\sin(x) \\) é \\( -\\cos(x) \\), então \\( \\left[ -\\cos(x) \\right]_0^\\pi = -\\cos(\\pi) + \\cos(0) = -(-1) + 1 = 2 \\)."
                ],
                "solution": "F(x) = 2."
            }
        ],
         "aplication": "<center><h3>Aplicação</h3></center>\n\nO cálculo de área utilizando integrais definidas é um conceito fundamental em cálculo. Ele nos permite calcular a área sob uma curva, que é representada pela integral definida de uma função no intervalo \\([a, b]\\). Este método é amplamente utilizado em várias disciplinas, como geometria, física e economia. \n\nEm geometria, o cálculo da área sob a curva de uma função \\( f(x) \\) no intervalo \\([a, b]\\) é dado pela integral \\( A = \\int_{a}^{b} f(x) \\: dx \\), que nos fornece a área entre a curva e o eixo \\(x\\). Essa técnica é essencial para resolver problemas envolvendo áreas irregulares, como o cálculo da área de uma superfície ou de uma região delimitada por gráficos de funções. \n\nAlém disso, na física, esse conceito é usado para calcular o trabalho realizado por uma força, já que o trabalho é a integral da força ao longo de um deslocamento. Na economia, as integrais definidas são empregadas para calcular o total de receitas ou custos acumulados ao longo de um período. Dessa forma, a integral definida é uma ferramenta crucial para resolver problemas de área em diversas áreas do conhecimento.<br><br>"
    },
    
    {
        "title": "Aula 8: Conceito e Exemplos de Integrais Definidas: Cálculo de Área entre Curvas",
        "image": "imagens/aula8.png",
        "summary": "Na última parte sobre integrais definidas, abordaremos integrais com funções ainda mais complexas e a aplicação de métodos avançados de integração. Vamos revisar e aplicar as técnicas adquiridas ao longo do curso para resolver integrais difíceis e explorar novas maneiras de interpretar o resultado dos cálculos. A aplicação de funções trigonométricas, exponenciais e outras funções não elementares será discutida em profundidade, culminando com problemas complexos que podem ser resolvidos de forma eficiente com os métodos estudados nas aulas anteriores.",
        "exercises": [
            {
                "question": " ∫₀² (x³ - 3x) dx.",
                "steps": [
                    "Primeiro, separamos a integral em duas partes: \\( \\int_0^2 x^3 dx - \\int_0^2 3x dx \\).",
                    "A integral de \\( x^3 \\) é \\( \\frac{x^4}{4} \\), então \\( \\left[ \\frac{x^4}{4} \\right]_0^2 = \\frac{16}{4} - 0 = 4 \\).",
                    "A integral de \\( 3x \\) é \\( \\frac{3x^2}{2} \\), então \\( \\left[ \\frac{3x^2}{2} \\right]_0^2 = \\frac{3(4)}{2} - 0 = 6 \\).",
                    "Subtraindo os resultados: \\( 4 - 6 = -2 \\), então \\( F(x) = 4 \\)."
                ],
                "solution": "F(x) = 4."
            },
            {
                "question": " ∫₀⁵ (x² + 3x) dx.",
                "steps": [
                    "Primeiro, separamos a integral em duas partes: \\( \\int_0^5 x^2 dx + \\int_0^5 3x dx \\).",
                    "A integral de \\( x^2 \\) é \\( \\frac{x^3}{3} \\), então \\( \\left[ \\frac{x^3}{3} \\right]_0^5 = \\frac{125}{3} - 0 = \\frac{125}{3} \\).",
                    "A integral de \\( 3x \\) é \\( \\frac{3x^2}{2} \\), então \\( \\left[ \\frac{3x^2}{2} \\right]_0^5 = \\frac{3(25)}{2} - 0 = \\frac{75}{2} \\).",
                    "Somando os resultados: \\( \\frac{125}{3} + \\frac{75}{2} = \\frac{250}{6} + \\frac{225}{6} = \\frac{475}{6} = 83.33 \\)."
                ],
                "solution": "F(x) = 83.33"
            },
            {
                "question": " ∫₀π (sin²(x)) dx.",
                "steps": [
                    "Usamos a identidade trigonométrica \\( \\sin^2(x) = \\frac{1}{2}(1 - \\cos(2x)) \\),",
                    "Substituindo na integral: \\( \\int_0^\\pi \\sin^2(x) dx = \\frac{1}{2} \\int_0^\\pi (1 - \\cos(2x)) dx. \\)",
                    "A integral de 1 é \\( x \\), e a integral de \\( \\cos(2x) \\) é \\( \\frac{\\sin(2x)}{2} \\).",
                    "Então, a integral se torna: \\( \\frac{1}{2} \\left[ x - \\frac{\\sin(2x)}{2} \\right]_0^\\pi = \\frac{1}{2} \\left( \\pi - 0 \\right) = \\frac{\\pi}{2}. \\)"
                ],
                "solution": "F(x) = \\frac{\\pi}{2}."
            },
            {
                "question": " ∫₀² (x² - x + 1) dx.",
                "steps": [
                    "Primeiro, separamos a integral em três partes: \\( \\int_0^2 x^2 dx - \\int_0^2 x dx + \\int_0^2 1 dx \\).",
                    "A integral de \\( x^2 \\) é \\( \\frac{x^3}{3} \\), então \\( \\left[ \\frac{x^3}{3} \\right]_0^2 = \\frac{8}{3} - 0 = \\frac{8}{3} \\).",
                    "A integral de \\( x \\) é \\( \\frac{x^2}{2} \\), então \\( \\left[ \\frac{x^2}{2} \\right]_0^2 = \\frac{4}{2} - 0 = 2 \\).",
                    "A integral de 1 é \\( x \\), então \\( [x]_0^2 = 2 - 0 = 2 \\).",
                    "Somando os resultados: \\( \\frac{8}{3} - 2 + 2 = \\frac{8}{3} = 7. \\)"
                ],
                "solution": "F(x) = 7."
            },
            {
                "question": " ∫₀² (1/(x² + 1)) dx.",
                "steps": [
                    "Essa integral é uma integral de arco-tangente, pois a integral de \\( \\frac{1}{x^2 + 1} \\) é \\( \\tan^{-1}(x) \\).",
                    "Substituindo os limites: \\( \\int_0^2 \\frac{1}{x^2 + 1} dx = \\left[ \\tan^{-1}(x) \\right]_0^2 = \\tan^{-1}(2) - \\tan^{-1}(0) \\).",
                    "Como \\( \\tan^{-1}(0) = 0 \\), a solução é \\( \\tan^{-1}(2) \\), que é igual a \\( \\frac{\\pi}{4}. \\)"
                ],
                "solution": "F(x) = \\frac{\\pi}{4}."
            }
        ],
        "aplication": "<center><h3>Aplicação</h3></center>\n\nO cálculo de áreas entre curvas é uma das aplicações mais importantes das integrais definidas. Ele é usado para determinar a área limitada entre duas funções em um intervalo específico. Este processo é essencial em várias áreas da ciência e engenharia, como a física, onde pode ser utilizado para calcular a área de regiões representadas por gráficos de funções de movimento, como a distância percorrida por um objeto em um determinado intervalo de tempo. \n\nPor exemplo, a integral definida \\( \\int_{a}^{b} [f(x) - g(x)] \\: dx \\) calcula a área entre as curvas \\( y = f(x) \\) e \\( y = g(x) \\) no intervalo \\([a, b]\). Esse conceito também é aplicado em economia para calcular o lucro ou a receita gerada entre dois pontos de um gráfico de função de lucro. Além disso, é fundamental para o design e a análise de formas em engenharia, como o cálculo da área de uma seção transversal de uma estrutura, onde as curvas representam diferentes perfis da forma desejada. Assim, a integral definida oferece uma ferramenta poderosa para resolver uma ampla gama de problemas práticos.<br><br>"
    },
    {
        "title": "Aula 9: Cálculo da Diferencial e Integrais",
        "image": "imagens/aula9.png",
        "summary": "Na Aula 9, abordamos o conceito de diferencial com uma variável, que é fundamental para entender o comportamento de funções em pontos específicos. Em seguida, discutiremos as integrais indefinidas, explorando sua notação, propriedades e exemplos, com ênfase na solução em função da variável e da constante. Também falaremos sobre as integrais definidas, explicando o conceito, notação e propriedades, com destaque para a solução em termos de um valor numérico. Por fim, veremos como calcular áreas utilizando integrais definidas.",
        "exercises": [
            { 
                "question": "∫(4x³ - 6x + 5) dx", 
                "steps": [
                    "Para a integral de \(4x^3 - 6x + 5\), aplicamos a regra de potências para cada termo.",
                    "Integra \(4x^3\): \\( \\int 4x^3 dx = x^4 \\).",
                    "Integra \( -6x \): \\( \\int -6x dx = -3x^2 \\).",
                    "Integra \(5\): \\( \\int 5 dx = 5x \\).",
                    "A integral indefinida fica: \\( F(x) = x^4 - 3x^2 + 5x + C \\)."
                ],
                "solution": "F(x) = x⁴ - 3x² + 5x + C"
            },
            { 
                "question": "∫(3x² + 2x + 1) dx", 
                "steps": [
                    "Integra \(3x^2\): \\( \\int 3x^2 dx = x^3 \\).",
                    "Integra \(2x\): \\( \\int 2x dx = x^2 \\).",
                    "Integra \(1\): \\( \\int 1 dx = x \\).",
                    "A integral indefinida fica: \\( F(x) = x^3 + x^2 + x + C \\)."
                ],
                "solution": "F(x) = x³ + x² + x + C"
            },
            { 
                "question": "∫₀² (x² - 2x + 1) dx", 
                "steps": [
                    "Divida a integral em três partes: \\( \\int_0^2 x^2 dx - 2 \\int_0^2 x dx + \\int_0^2 1 dx \\).",
                    "Integra \(x^2\): \\( \\int_0^2 x^2 dx = \\frac{x^3}{3} |₀² = \\frac{8}{3} \\).",
                    "Integra \(x\): \\( \\int_0^2 x dx = \\frac{x^2}{2} |₀² = 2 \\).",
                    "Integra \(1\): \\( \\int_0^2 1 dx = x |₀² = 2 \\).",
                    "Agora, substitua os valores e some: \\( \\frac{8}{3} - 2(2) + 2 = \\frac{8}{3} - 4 + 2 = \\frac{2}{3} \\)."
                ],
                "solution": "F(x) = 2/3"
            },
            { 
                "question": "∫₀³ (x³ + x) dx", 
                "steps": [
                    "Divida a integral em duas partes: \\( \\int_0^3 x^3 dx + \\int_0^3 x dx \\).",
                    "Integra \(x^3\): \\( \\int_0^3 x^3 dx = \\frac{x^4}{4} |₀³ = \\frac{81}{4} = 20.25 \\).",
                    "Integra \(x\): \\( \\int_0^3 x dx = \\frac{x^2}{2} |₀³ = 4.5 \\).",
                    "Agora, some os resultados: 20.25 + 4.5 = 24.75"
                ],
                "solution": "F(x) = 24.75"
            },
            { 
                "question": "∫₀⁰ (sin(x)) dx", 
                "steps": [
                    "A integral de \\(sin(x)\\) de 0 a 0 é 0, porque o limite superior e inferior são iguais.",
                    "Portanto, a integral resulta em \\( 0 \\)."
                ],
                "solution": "F(x) = 0"
            }
        ],
        "aplication" : `<center><h3>Aplicação</h3></center>
        O estudo das integrais e diferenciais tem uma ampla gama de aplicações em várias áreas do conhecimento. Em física, a diferencial é usada para modelar variações instantâneas, como velocidade e aceleração de partículas, enquanto as integrais são aplicadas no cálculo de trabalho, energia e movimento de corpos. Em engenharia, as integrais ajudam a calcular áreas de materiais, volumes de objetos e momentos de inércia, enquanto as diferenciais são usadas para descrever o comportamento de sistemas dinâmicos e otimizar processos. Na economia, o cálculo diferencial é essencial para determinar taxas de crescimento e maximizar lucros, enquanto a integral é usada para calcular o valor presente de fluxos de caixa e a análise de investimentos ao longo do tempo. Além disso, em biologia, esses cálculos são aplicados para modelar o crescimento de populações e processos de difusão, e em estatística, eles são cruciais para a análise de distribuições de probabilidades e modelagem de dados contínuos.<br>`,
    },
    {
        "title": "Aula 10: Integrais por Integração por Partes",
        "image": "imagens/aula10.png",
        "summary": "Na Aula 10, abordaremos a técnica de integração por partes, que é uma das ferramentas essenciais para integrar funções mais complexas. Vamos explorar o desenvolvimento das fórmulas básicas e como aplicá-las de forma eficaz. A integração por partes é baseada na fórmula \\( \\int u \\, dv = uv - \\int v \\, du \\), e em nossa aula, vamos aprender como escolher as funções \\( u \\) e \\( dv \\) para facilitar a integração de funções que não podem ser integradas diretamente. Serão discutidos exemplos práticos e desafios para aplicar essa técnica de forma eficiente.",
        "exercises": [
            {
                "question": "∫ x e^x dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = x \\), \\( dv = e^x dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = dx \\), \\( v = \\int e^x dx = e^x \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x e^x dx = x e^x - \\int e^x dx \\).",
                    "Resolva a integral restante: \\( \\int x e^x dx = x e^x - e^x + C \\)."
                ],
                "solution": "F(x) = x e^x - e^x + C"
            },
            {
                "question": "∫ ln(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = ln(x) \\), \\( dv = dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = \\frac{1}{x} dx \\), \\( v = \\int dx = x \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int ln(x) dx = x ln(x) - \\int x \\frac{1}{x} dx \\).",
                    "Resolva a integral restante: \\( \\int ln(x) dx = x ln(x) - x + C \\)."
                ],
                "solution": "F(x) = x ln(x) - x + C"
            },
            {
                "question": "∫ x² cos(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = x^2 \\), \\( dv = cos(x) dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = 2x dx \\), \\( v = \\int cos(x) dx = sin(x) \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x^2 cos(x) dx = x^2 sin(x) - \\int 2x sin(x) dx \\).",
                    "Repita o processo para \\( \\int 2x sin(x) dx \\) usando integração por partes novamente.",
                    "Resolva: \\( F(x) = x^2 sin(x) + 2x cos(x) - 2 sin(x) + C \\)."
                ],
                "solution": "F(x) = x² sin(x) + 2x cos(x) - 2 sin(x) + C"
            },
            {
                "question": "∫ e^x sin(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = sin(x) \\), \\( dv = e^x dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = cos(x) dx \\), \\( v = \\int e^x dx = e^x \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int e^x sin(x) dx = e^x sin(x) - \\int e^x cos(x) dx \\).",
                    "Repita o processo para \\( \\int e^x cos(x) dx \\) usando integração por partes novamente.",
                    "Combine os resultados: \\( F(x) = \\frac{1}{2} e^x (sin(x) - cos(x)) + C \\)."
                ],
                "solution": "F(x) = (1/2)e^x (sin(x) - cos(x)) + C"
            },
            {
                "question": "∫ x³ ln(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = ln(x) \\), \\( dv = x^3 dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = \\frac{1}{x} dx \\), \\( v = \\int x^3 dx = \\frac{x^4}{4} \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x^3 ln(x) dx = \\frac{x^4 ln(x)}{4} - \\int \\frac{x^4}{4} \\frac{1}{x} dx \\).",
                    "Resolva a integral restante: \\( \\int x^3 ln(x) dx = \\frac{x^4 ln(x)}{4} - \\frac{x^4}{16} + C \\).",
                    "Simplifique: \\( F(x) = \\frac{x^4 ln(x)}{4} - \\frac{3x^4}{16} + C \\)."
                ],
                "solution": "F(x) = (x³ ln(x) - 3/4 x⁴) + C"
            }
        ],
        "aplication": `
        <center><h3>Aplicação</h3></center>

        A técnica de integração por partes é amplamente utilizada para resolver integrais de produtos de funções, especialmente em problemas envolvendo física, economia e engenharia. Ela permite transformar integrais complexas em formas mais simples, tornando-a uma ferramenta essencial em várias disciplinas.

        <ul>
            <li><br>Física: Cálculo de Trabalho e Energia:** A integração por partes é usada para calcular o trabalho realizado por forças variáveis. Por exemplo, ao calcular a energia produzida por uma força que varia com a posição, a técnica é aplicada para resolver integrais envolvendo produtos de força e deslocamento.</li>
            <li><b>Engenharia Elétrica: Cálculo de Correntes e Tensões:</b> Em circuitos elétricos, onde a corrente e a tensão variam com o tempo, a integração por partes pode ser utilizada para resolver integrais envolvendo produtos de funções exponenciais e trigonométricas, comuns em circuitos RLC e sistemas de resposta de sinais.</li>
            <li><b>Economia: Cálculo de Custo e Lucro:</b> A técnica é útil em economia para modelar a mudança de variáveis relacionadas ao lucro ou custo ao longo do tempo. Quando essas variáveis são funções de crescimento exponencial e polinomial, a integração por partes ajuda a calcular o valor presente de fluxos financeiros ou o valor acumulado ao longo do tempo.</li>
            <li><b>Probabilidade e Estatística: Distribuições de Probabilidade:</b> A integração por partes é utilizada na determinação de momentos de distribuições probabilísticas, como a esperança matemática e variância de distribuições contínuas. Essas distribuições são frequentemente modeladas por produtos de funções, tornando a técnica indispensável.</li>
        </ul>

        Essa técnica facilita o cálculo de integrais complexas, especialmente quando as funções integradas são produtos de polinômios, exponenciais ou funções trigonométricas, sendo amplamente aplicada em diversas áreas científicas e industriais.
        <br><br>
        `
    },
    
    {
        "title": "Aula 11: Integrais Definidas com a Técnica de Integração por Partes",
        "image": "imagens/aula11.png",
        "summary": "Na Aula 11, abordaremos a aplicação da técnica de integração por partes em integrais definidas. Vamos explorar como adaptar a fórmula básica de integração por partes para trabalhar com limites de integração. Essa técnica se torna particularmente útil para resolver integrais de funções mais complexas, como produtos de funções algébricas, exponenciais, trigonométricas ou logaritmos. A aplicação de integrais definidas com a técnica de integração por partes é uma habilidade fundamental para resolver problemas de áreas, volumes e outros problemas aplicados.",
        "exercises": [
            {
                "question": "∫₀¹ x e^x dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = x \\), \\( dv = e^x dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = dx \\), \\( v = \\int e^x dx = e^x \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x e^x dx = x e^x - \\int e^x dx \\).",
                    "Resolva a integral restante: \\( \\int x e^x dx = x e^x - e^x \\).",
                    "Avalie nos limites \\( [0, 1] \\): \\( [1 \\cdot e^1 - e^1] - [0 \\cdot e^0 - e^0] = e - 1 \\)."
                ],
                "solution": "F(x) = e - 1"
            },
            {
                "question": "∫₁² x ln(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = ln(x) \\), \\( dv = x dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = \\frac{1}{x} dx \\), \\( v = \\int x dx = \\frac{x^2}{2} \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x ln(x) dx = \\frac{x^2}{2} ln(x) - \\int \\frac{x^2}{2} \\frac{1}{x} dx \\).",
                    "Resolva a integral restante: \\( \\int x ln(x) dx = \\frac{x^2}{2} ln(x) - \\frac{x^2}{4} \\).",
                    "Avalie nos limites \\( [1, 2] \\): \\( \\left[ \\frac{2^2}{2} ln(2) - \\frac{2^2}{4} \\right] - \\left[ \\frac{1^2}{2} ln(1) - \\frac{1^2}{4} \\right] = 2ln(2) - 1 \\)."
                ],
                "solution": "F(x) = 2ln(2) - 1"
            },
            {
                "question": "∫₀π/2 x cos(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = x \\), \\( dv = cos(x) dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = dx \\), \\( v = \\int cos(x) dx = sin(x) \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x cos(x) dx = x sin(x) - \\int sin(x) dx \\).",
                    "Resolva a integral restante: \\( \\int x cos(x) dx = x sin(x) + cos(x) \\).",
                    "Avalie nos limites \\( [0, \\pi/2] \\): \\( \\left[ \\frac{\\pi}{2} \\cdot sin\\left(\\frac{\\pi}{2}\\right) + cos\\left(\\frac{\\pi}{2}\\right) \\right] - \\left[ 0 \\cdot sin(0) + cos(0) \\right] = \\frac{\\pi}{2} \\)."
                ],
                "solution": "F(x) = π/2"
            },
            {
                "question": "∫₀² x² e^x dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = x^2 \\), \\( dv = e^x dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = 2x dx \\), \\( v = \\int e^x dx = e^x \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x^2 e^x dx = x^2 e^x - \\int 2x e^x dx \\).",
                    "Resolva \\( \\int 2x e^x dx \\) com integração por partes novamente.",
                    "Após resolver as integrais, avalie nos limites \\( [0, 2] \\): \\( \\int_0^2 x^2 e^x dx = 2e^2 - 5 \\)."
                ],
                "solution": "F(x) = 2e² - 5"
            },
            {
                "question": "∫₁³ x³ ln(x) dx",
                "steps": [
                    "Identifique \\( u \\) e \\( dv \\): \\( u = ln(x) \\), \\( dv = x^3 dx \\).",
                    "Calcule \\( du \\) e \\( v \\): \\( du = \\frac{1}{x} dx \\), \\( v = \\int x^3 dx = \\frac{x^4}{4} \\).",
                    "Substitua na fórmula: \\( \\int u dv = uv - \\int v du \\).",
                    "Resultado parcial: \\( \\int x^3 ln(x) dx = \\frac{x^4}{4} ln(x) - \\int \\frac{x^4}{4} \\frac{1}{x} dx \\).",
                    "Resolva a integral restante: \\( \\int x^3 ln(x) dx = \\frac{x^4}{4} ln(x) - \\frac{x^4}{16} \\).",
                    "Avalie nos limites \\( [1, 3] \\): \\( \\int_1^3 x^3 ln(x) dx = 27ln(3) - 45 \\)."
                ],
                "solution": "F(x) = 27ln(3) - 45"
            }
        ],
        "aplication": "<center><h3>Aplicação</h3></center>\n\nA técnica de integração por partes é amplamente utilizada em problemas de física e engenharia, especialmente para modelar fenômenos que envolvem produtos de funções, como o cálculo de trabalho realizado por uma força que varia com o tempo ou a energia armazenada em sistemas oscilatórios. Um exemplo típico é o cálculo de momentos de inércia em mecânica ou a análise de circuitos elétricos envolvendo funções exponenciais e trigonométricas. A técnica também é essencial na solução de integrais de funções em física quântica, onde a integração por partes pode simplificar expressões complexas e fornecer resultados mais gerenciáveis. <br><br>"
    },
    

    {
        "title": "Aula 12: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/aula12.png",
        "summary": "Nesta aula, introduziremos o método de frações parciais para calcular integrais de funções racionais. O foco estará no 1º caso, que trata de funções racionais com denominadores que podem ser decompostos em fatores lineares distintos. Exploraremos a técnica de decomposição e aplicaremos os métodos básicos de integração para resolver exemplos práticos e relevantes.",
        "exercises": [
            {
                "question": "∫ 1/(x(x+1)) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{1}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1} \\).",
                    "Resolva para \\( A \\) e \\( B \\): \\( 1 = A(x+1) + Bx \\). Comparando coeficientes, \\( A = 1 \\) e \\( B = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x(x+1)} dx = \\int \\frac{1}{x} dx - \\int \\frac{1}{x+1} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x} dx = \\ln|x| \\) e \\( \\int \\frac{1}{x+1} dx = \\ln|x+1| \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x| - \\ln|x+1| + C \\)."
                ],
                "solution": "F(x) = ln|x| - ln|x+1| + C."
            },
            {
                "question": "∫ (x+2)/(x²+x) dx.",
                "steps": [
                    "Fatore o denominador: \\( x^2 + x = x(x+1) \\).",
                    "Decomponha a fração: \\( \\frac{x+2}{x(x+1)} = \\frac{A}{x} + \\frac{B}{x+1} \\).",
                    "Resolva para \\( A \\) e \\( B \\): \\( x+2 = A(x+1) + Bx \\). Comparando coeficientes, \\( A = 1 \\) e \\( B = 1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{x+2}{x(x+1)} dx = \\int \\frac{1}{x} dx + \\int \\frac{1}{x+1} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x} dx = \\ln|x| \\) e \\( \\int \\frac{1}{x+1} dx = \\ln|x+1| \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x| + \\ln|x+1| + C \\)."
                ],
                "solution": "F(x) = ln|x| + ln|x+1| + C."
            },
            {
                "question": "∫ 1/(x²-1) dx.",
                "steps": [
                    "Fatore o denominador: \\( x^2 - 1 = (x-1)(x+1) \\).",
                    "Decomponha a fração: \\( \\frac{1}{x^2-1} = \\frac{A}{x-1} + \\frac{B}{x+1} \\).",
                    "Resolva para \\( A \\) e \\( B \\): \\( 1 = A(x+1) + B(x-1) \\). Comparando coeficientes, \\( A = \\frac{1}{2} \\) e \\( B = -\\frac{1}{2} \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x^2-1} dx = \\frac{1}{2} \\int \\frac{1}{x-1} dx - \\frac{1}{2} \\int \\frac{1}{x+1} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x-1} dx = \\ln|x-1| \\) e \\( \\int \\frac{1}{x+1} dx = \\ln|x+1| \\).",
                    "Combine os resultados: \\( F(x) = \\frac{1}{2} \\ln|x-1| - \\frac{1}{2} \\ln|x+1| + C \\)."
                ],
                "solution": "F(x) = (1/2)ln|x-1| - (1/2)ln|x+1| + C."
            },
            {
                "question": "∫ (2x+3)/(x²+x-6) dx.",
                "steps": [
                    "Fatore o denominador: \\( x^2 + x - 6 = (x-2)(x+3) \\).",
                    "Decomponha a fração: \\( \\frac{2x+3}{x^2+x-6} = \\frac{A}{x-2} + \\frac{B}{x+3} \\).",
                    "Resolva para \\( A \\) e \\( B \\): \\( 2x+3 = A(x+3) + B(x-2) \\). Comparando coeficientes, \\( A = 1 \\) e \\( B = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{2x+3}{x^2+x-6} dx = \\int \\frac{1}{x-2} dx - \\int \\frac{1}{x+3} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x-2} dx = \\ln|x-2| \\) e \\( \\int \\frac{1}{x+3} dx = \\ln|x+3| \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x-2| - \\ln|x+3| + C \\)."
                ],
                "solution": "F(x) = ln|x-2| - ln|x+3| + C."
            },
            {
                "question": "∫ 1/(x²+3x+2) dx.",
                "steps": [
                    "Fatore o denominador: \\( x^2 + 3x + 2 = (x+1)(x+2) \\).",
                    "Decomponha a fração: \\( \\frac{1}{x^2+3x+2} = \\frac{A}{x+1} + \\frac{B}{x+2} \\).",
                    "Resolva para \\( A \\) e \\( B \\): \\( 1 = A(x+2) + B(x+1) \\). Comparando coeficientes, \\( A = 1 \\) e \\( B = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x^2+3x+2} dx = \\int \\frac{1}{x+1} dx - \\int \\frac{1}{x+2} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x+1} dx = \\ln|x+1| \\) e \\( \\int \\frac{1}{x+2} dx = \\ln|x+2| \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x+1| - \\ln|x+2| + C \\)."
                ],
                "solution": "F(x) = ln|x+1| - ln|x+2| + C."
            }
        ],
        "aplication": `
        <center><h3>Aplicação</h3></center>

        A técnica de integrais de funções racionais por frações parciais é amplamente utilizada na análise de sistemas de controle, especialmente na modelagem e no estudo de sistemas dinâmicos e sua resposta a entradas específicas, como em automação e robótica.

        <ul>
            <li><br>Análise de Resposta de Sistemas Dinâmicos:</br>Em sistemas de controle, funções racionais modelam a relação entre entrada e saída de um sistema. Frações parciais são usadas para calcular a resposta no domínio do tempo, como o comportamento de um sistema após uma perturbação.</li>
            <li><br>Controle de Processos Industriais:</br>Em processos industriais como a produção de produtos químicos ou a fabricação de semicondutores, as funções racionais representam a dinâmica dos processos, e as frações parciais ajudam a calcular a resposta do sistema a mudanças nas variáveis de controle.</li>
            <li><br>Modelagem de Sistemas Mecânicos:</br> No estudo de sistemas mecânicos, como veículos ou máquinas automatizadas, as frações parciais facilitam a análise de vibrações e forças atuantes, que são representadas por funções racionais da frequência.</li>
        </ul>

        Esta abordagem é fundamental para o design e otimização de sistemas de controle modernos, garantindo estabilidade, precisão e eficiência nas operações automáticas e industriais.
        <br><br>
        `
    },
    {
        "title": "Aula 13: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/aula13.png",
        "summary": "Nesta aula, vamos abordar as integrais de funções racionais utilizando o método de frações parciais, com ênfase no 2º caso. Este caso envolve funções racionais com fatores lineares repetidos no denominador. O objetivo é aprender a decompô-las em frações simples, permitindo uma integração mais direta. Serão discutidas técnicas para resolver integrais com múltiplas repetições e aplicar os resultados em problemas práticos.",
        "exercises": [
            {
                "question": "∫ 1/(x(x+1)²) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{1}{x(x+1)^2} = \\frac{A}{x} + \\frac{B}{x+1} + \\frac{C}{(x+1)^2} \\).",
                    "Resolva para \\( A \\), \\( B \\) e \\( C \\): \\( 1 = A(x+1)^2 + Bx(x+1) + Cx \\). Comparando coeficientes, obtenha \\( A = -1 \\), \\( B = 1 \\), \\( C = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x(x+1)^2} dx = \\int \\frac{-1}{x} dx + \\int \\frac{1}{x+1} dx - \\int \\frac{1}{(x+1)^2} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{-1}{x} dx = -\\ln|x| \\), \\( \\int \\frac{1}{x+1} dx = \\ln|x+1| \\), \\( \\int \\frac{1}{(x+1)^2} dx = -\\frac{1}{x+1} \\).",
                    "Combine os resultados: \\( F(x) = -\\ln|x| + \\ln|x+1| - \\frac{1}{x+1} + C \\)."
                ],
                "solution": "F(x) = -ln|x| + ln|x+1| - 1/(x+1)² + C."
            },
            {
                "question": "∫ 1/(x²(x+2)) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{1}{x^2(x+2)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+2} \\).",
                    "Resolva para \\( A \\), \\( B \\) e \\( C \\): \\( 1 = A(x)(x+2) + B(x+2) + Cx^2 \\). Comparando coeficientes, obtenha \\( A = -1 \\), \\( B = 1/2 \\), \\( C = -1/2 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x^2(x+2)} dx = \\int \\frac{-1}{x} dx + \\int \\frac{1/2}{x^2} dx - \\int \\frac{1/2}{x+2} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{-1}{x} dx = -\\ln|x| \\), \\( \\int \\frac{1/2}{x^2} dx = -\\frac{1}{2x} \\), \\( \\int \\frac{-1/2}{x+2} dx = -\\frac{1}{2}\\ln|x+2| \\).",
                    "Combine os resultados: \\( F(x) = -\\ln|x| - \\frac{1}{2x} - \\frac{1}{2}\\ln|x+2| + C \\)."
                ],
                "solution": "F(x) = -ln|x| + 1/(2x²) - ln|x+2|/2 + C."
            },
            {
                "question": "∫ (x+1)/(x²(x+1)²) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{x+1}{x^2(x+1)^2} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1} + \\frac{D}{(x+1)^2} \\).",
                    "Resolva para \\( A \\), \\( B \\), \\( C \\), \\( D \\): \\( x+1 = A(x)(x+1)^2 + B(x+1)^2 + C(x^2)(x+1) + D(x^2) \\).",
                    "Determine \\( A = 0 \\), \\( B = -1 \\), \\( C = 1 \\), \\( D = 1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{x+1}{x^2(x+1)^2} dx = \\int \\frac{-1}{x^2} dx + \\int \\frac{1}{x} dx - \\int \\frac{1}{x+1} dx + \\int \\frac{1}{(x+1)^2} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{-1}{x^2} dx = \\frac{1}{x} \\), \\( \\int \\frac{1}{x} dx = \\ln|x| \\), \\( \\int \\frac{-1}{x+1} dx = -\\ln|x+1| \\), \\( \\int \\frac{1}{(x+1)^2} dx = -\\frac{1}{x+1} \\).",
                    "Combine os resultados: \\( F(x) = \\frac{1}{x} + \\ln|x| - \\ln|x+1| - \\frac{1}{x+1} + C \\)."
                ],
                "solution": "F(x) = -1/x² + 1/x - 1/(x+1) + ln|x+1| + C."
            },
            {
                "question": "∫ 1/(x(x²+1)) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{1}{x(x^2+1)} = \\frac{A}{x} + \\frac{Bx+C}{x^2+1} \\).",
                    "Resolva para \\( A \\), \\( B \\), \\( C \\): \\( 1 = A(x^2+1) + (Bx+C)x \\). Comparando coeficientes, obtenha \\( A = 1 \\), \\( B = 0 \\), \\( C = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x(x^2+1)} dx = \\int \\frac{1}{x} dx - \\int \\frac{1}{x^2+1} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x} dx = \\ln|x| \\), \\( \\int \\frac{1}{x^2+1} dx = \\arctan(x) \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x| - \\arctan(x) + C \\)."
                ],
                "solution": "F(x) = ln|x|/2 - arctan(x)/2 + C."
            },
            {
                "question": "∫ x/(x²(x+1)) dx.",
                "steps": [
                    "Decomponha a fração: \\( \\frac{x}{x^2(x+1)} = \\frac{A}{x} + \\frac{B}{x^2} + \\frac{C}{x+1} \\).",
                    "Resolva para \\( A \\), \\( B \\), \\( C \\): \\( x = A(x)(x+1) + B(x+1) + C(x^2) \\). Comparando coeficientes, obtenha \\( A = 1 \\), \\( B = -1 \\), \\( C = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{x}{x^2(x+1)} dx = \\int \\frac{1}{x} dx - \\int \\frac{1}{x^2} dx - \\int \\frac{1}{x+1} dx \\).",
                    "Resolva as integrais: \\( \\int \\frac{1}{x} dx = \\ln|x| \\), \\( \\int \\frac{-1}{x^2} dx = \\frac{1}{x} \\), \\( \\int \\frac{-1}{x+1} dx = -\\ln|x+1| \\).",
                    "Combine os resultados: \\( F(x) = \\ln|x| + \\frac{1}{x} - \\ln|x+1| + C \\)."
                ],
                "solution": "F(x) = -1/(2x²) + 1/x - ln|x+1| + C."
            }
        ],
        "aplication": `
        <center><h3>Aplicação</h3></center>

        As integrais de funções racionais por frações parciais são essenciais na análise de sinais em telecomunicações. Um exemplo prático é na modulação e demodulação de sinais de rádio ou na análise de filtros de frequência. 

        <ul>
            <li<b>Filtragem de Sinais:</b> Em sistemas de comunicação, frações parciais são usadas para decompor funções racionais que representam respostas de filtros passa-baixa, passa-alta e passa-banda.</li>
            <li<b>Transmissão Digital:</b> Na análise de sinais transmitidos e recebidos, a transformada inversa de Laplace, com a ajuda de frações parciais, facilita a análise de sinais modulados em diferentes bandas de frequência.</li>
            <li<b>Análise de Interferências:</b> Frações parciais permitem estudar como ruídos ou interferências afetam sinais, otimizando o design de sistemas para reduzir perdas ou distorções.</li>
        </ul>

        Essa técnica é fundamental para garantir uma comunicação clara e eficiente, sendo aplicada no desenvolvimento de tecnologias como Wi-Fi, 4G/5G e sistemas de radar.  

        <br><br>

        `
    },
    {
        "title": "Aula 14: Integrais de Funções Racionais por Frações Parciais",
        "image": "imagens/aula14.png",
        "summary": "Nesta aula, exploraremos as integrais de funções racionais utilizando o método de frações parciais, focando no desenvolvimento e aplicação das fórmulas básicas de integração. Abordaremos especificamente o 3º e o 4º caso, que envolvem funções racionais com fatores quadráticos irredutíveis e suas potências. O objetivo é consolidar as técnicas já aprendidas e aplicá-las para resolver integrais mais complexas e desafiadoras, destacando a importância deste método em problemas avançados de cálculo.",
        "exercises": [
            {
                "question": "∫ (x + 2)/(x² + 2x + 2) dx.",
                "steps": [
                    "Identifique o denominador como um fator quadrático irredutível: \\( x^2 + 2x + 2 \\).",
                    "Reescreva o numerador para adequar-se à forma do denominador: \\( x + 2 = \\frac{1}{2}d(x^2 + 2x + 2) \\).",
                    "Integre diretamente: \\( \\int \\frac{1}{2}d(x^2 + 2x + 2)/(x^2 + 2x + 2) = \\frac{1}{2} \\ln(x^2 + 2x + 2) + C \\).",
                    "Solução final: \\( F(x) = \\ln(x^2 + 2x + 2)/2 + C \\)."
                ],
                "solution": "F(x) = ln(x² + 2x + 2)/2 + C."
            },
            {
                "question": "∫ 1/(x³ + x) dx.",
                "steps": [
                    "Fatore o denominador: \\( x^3 + x = x(x^2 + 1) \\).",
                    "Decomponha a fração: \\( \\frac{1}{x(x^2+1)} = \\frac{A}{x} + \\frac{Bx+C}{x^2+1} \\).",
                    "Resolva para \\( A \\), \\( B \\), e \\( C \\): \\( 1 = A(x^2 + 1) + (Bx + C)x \\), obtendo \\( A = 1 \\), \\( B = 0 \\), \\( C = -1 \\).",
                    "Reescreva a integral: \\( \\int \\frac{1}{x(x^2+1)} dx = \\int \\frac{1}{x} dx - \\int \\frac{1}{x^2+1} dx \\).",
                    "Resolva as integrais: \\( \\ln|x| \\) e \\( \\arctan(x) \\).",
                    "Solução final: \\( F(x) = \\ln|x| - \\frac{1}{2}\\ln|x^2+1| + C \\)."
                ],
                "solution": "F(x) = ln|x| - ln|x² + 1|/2 + C."
            },
            {
                "question": "∫ (2x + 3)/(x² + 4x + 5) dx.",
                "steps": [
                    "Identifique o denominador como um fator quadrático irredutível: \\( x^2 + 4x + 5 \\).",
                    "O numerador pode ser expresso diretamente como \\( 2(x + 2) \\), simplificando a integração.",
                    "Integre diretamente usando \\( \\int \\frac{1}{u} du = \\ln|u| \\): \\( \\ln(x^2 + 4x + 5)/2 \\).",
                    "Solução final: \\( F(x) = \\ln(x^2 + 4x + 5)/2 + C \\)."
                ],
                "solution": "F(x) = ln(x² + 4x + 5)/2 + C."
            },
            {
                "question": "∫ x/(x² + 1)² dx.",
                "steps": [
                    "Faça a substituição \\( u = x^2 + 1 \\), \\( du = 2x dx \\).",
                    "Reescreva a integral como \\( \\int \\frac{1}{u^2} du \\).",
                    "Integre usando a fórmula \\( \\int u^{-2} du = -u^{-1} \\): \\( -1/(x^2 + 1) + C \\).",
                    "Solução final: \\( F(x) = -1/(x^2 + 1) + C \\)."
                ],
                "solution": "F(x) = -1/(x² + 1) + C."
            },
            {
                "question": "∫ 1/(x² + 4) dx.",
                "steps": [
                    "Identifique o denominador como um fator quadrático: \\( x^2 + 4 \\).",
                    "Use a substituição \\( u = x/2 \\), \\( du = dx/2 \\).",
                    "Reescreva a integral: \\( \\frac{1}{4} \\int \\frac{1}{u^2+1} du \\).",
                    "Resolva usando \\( \\int \\frac{1}{1+u^2} du = \\arctan(u) \\): \\( (1/2) \\arctan(x/2) + C \\).",
                    "Solução final: \\( F(x) = (1/2) \\arctan(x/2) + C \\)."
                ],
                "solution": "F(x) = (1/2) arctan(x/2) + C."
            }
        ],
        "aplication": `
        <center><h3>Aplicação</h3></center>

            As integrais de funções racionais por frações parciais têm diversas aplicações práticas em problemas do mundo real. Essa técnica é usada para simplificar cálculos em áreas como engenharia, economia e ciências naturais. Ela permite resolver problemas complexos ao dividir funções racionais em termos mais simples e manejáveis.

            <ul>
                <li><b>Análise de Circuitos Elétricos:</b> Em engenharia elétrica, as frações parciais ajudam a resolver integrais que aparecem na análise de correntes e tensões em circuitos RLC (resistores, indutores e capacitores), especialmente em transformadas inversas de Laplace.</li>
                <li><b>Modelagem Econômica:</b> Na economia, funções racionais são usadas para modelar sistemas com limites de crescimento ou declínio, como o impacto de uma política fiscal ao longo do tempo. A decomposição por frações parciais simplifica a análise de taxas acumuladas.</li>
                <li><b>Dinâmica de Fluidos:</b>  Em engenharia mecânica, as frações parciais auxiliam na análise de vazões em sistemas de tubulação complexos, onde o fluxo é modelado por funções racionais representando resistência e pressão.</li>
                <li><b>Farmacologia:</b>  No estudo da cinética de medicamentos, funções racionais aparecem ao modelar a absorção e eliminação de substâncias no corpo. Frações parciais ajudam a determinar a concentração do medicamento em diferentes instantes de tempo.</li>
            </ul>

            Essa técnica é indispensável para simplificar problemas, economizando tempo e recursos em cálculos complexos.
            <br><br>

        ` },
{
    "title": "Aula 15: Integrais Impróprias e Limites Infinitos",
    "image": "imagens/aula15.png",
    "summary": "Nesta aula, abordaremos as integrais impróprias, que são aquelas em que os limites de integração envolvem infinitos ou a função integrada apresenta uma descontinuidade no intervalo de integração. Serão explorados os conceitos de limites infinitos e integrais com intervalos infinitos. A aula também tratará da convergência e divergência das integrais impróprias, discutindo como avaliar essas integrais através de limites.",
    "exercises": [
        {
            "question": "\\int_{1}^{\\infty} \\frac{1}{x^2} \\: dx",
            "steps": [
                "A função \\( \\frac{1}{x^2} \\) é contínua no intervalo \\([1, \\infty)\\), então podemos aplicar o limite para a integral imprópria.",
                "Escreva a integral como um limite: \\( \\int_{1}^{\\infty} \\frac{1}{x^2} \\: dx = \\lim_{b \\to \\infty} \\int_{1}^{b} \\frac{1}{x^2} \\: dx \\).",
                "Integre \\( \\frac{1}{x^2} \\) usando a regra da potência: \\( \\int x^{-2} \\: dx = -x^{-1} \\).",
                "A integral se torna \\( \\left[- \\frac{1}{x} \\right]_{1}^{b} = - \\frac{1}{b} + 1 \\).",
                "Agora, aplique o limite: \\( \\lim_{b \\to \\infty} \\left( - \\frac{1}{b} + 1 \\right) = 1 \\)."
            ],
            "solution": "F(x) = 1."
        },
        {
            "question": "\\int_{0}^{1} \\frac{1}{\\sqrt{x}} \\: dx",
            "steps": [
                "A função \\( \\frac{1}{\\sqrt{x}} \\) tem um comportamento problemático em \\( x = 0 \\), então devemos avaliar a integral como uma integral imprópria.",
                "Escreva a integral como um limite: \\( \\int_{0}^{1} \\frac{1}{\\sqrt{x}} \\: dx = \\lim_{a \\to 0^{+}} \\int_{a}^{1} \\frac{1}{\\sqrt{x}} \\: dx \\).",
                "Integre \\( \\frac{1}{\\sqrt{x}} \\) utilizando a fórmula \\( \\int x^{-\\frac{1}{2}} \\: dx = 2x^{\\frac{1}{2}} \\).",
                "A integral se torna \\( \\left[ 2 \\sqrt{x} \\right]_{a}^{1} = 2 \\sqrt{1} - 2 \\sqrt{a} = 2 - 2 \\sqrt{a} \\).",
                "Agora, aplique o limite: \\( \\lim_{a \\to 0^{+}} (2 - 2 \\sqrt{a}) = 2 \\)."
            ],
            "solution": "F(x) = 2."
        },
        {
            "question": "\\int_{1}^{\\infty} \\frac{e^{-x}}{x} \\: dx",
            "steps": [
                "Esta integral é uma integral imprópria no limite superior, então vamos escrever como um limite: \\( \\int_{1}^{\\infty} \\frac{e^{-x}}{x} \\: dx = \\lim_{b \\to \\infty} \\int_{1}^{b} \\frac{e^{-x}}{x} \\: dx \\).",
                "Embora a integral de \\( \\frac{e^{-x}}{x} \\) não tenha uma antiderivada simples, ela pode ser aproximada numericamente ou utilizando funções especiais.",
                "Este tipo de integral é conhecido como a integral exponencial, denotada por \\( \text{Ei}(x) \\).",
                "A solução exata da integral é \\( \\int_{1}^{\\infty} \\frac{e^{-x}}{x} \\: dx = \\text{Ei}(-1) \\)."
            ],
            "solution": "F(x) = \\text{Ei}(-1)."
        },
        {
            "question": "\\int_{0}^{\\infty} \\frac{1}{x^2 + 1} \\: dx",
            "steps": [
                "A função \\( \\frac{1}{x^2 + 1} \\) é contínua e integrável no intervalo \\([0, \\infty)\\), então escreva a integral como um limite.",
                "Escreva a integral como \\( \\int_{0}^{\\infty} \\frac{1}{x^2 + 1} \\: dx = \\lim_{b \\to \\infty} \\int_{0}^{b} \\frac{1}{x^2 + 1} \\: dx \\).",
                "A integral de \\( \\frac{1}{x^2 + 1} \\) é \\( \\arctan(x) \\).",
                "A integral se torna \\( \\left[ \\arctan(x) \\right]_{0}^{b} = \\arctan(b) - \\arctan(0) \\).",
                "Agora, aplique o limite: \\( \\lim_{b \\to \\infty} \\left( \\arctan(b) - 0 \\right) = \\frac{\\pi}{2} \\)."
            ],
            "solution": "F(x) = \\frac{\\pi}{2}."
        },
        {
            "question": "\\int_{1}^{\\infty} \\frac{1}{x^3} \\: dx",
            "steps": [
                "A função \\( \\frac{1}{x^3} \\) é contínua no intervalo \\([1, \\infty)\\), então podemos aplicar o limite para a integral imprópria.",
                "Escreva a integral como \\( \\int_{1}^{\\infty} \\frac{1}{x^3} \\: dx = \\lim_{b \\to \\infty} \\int_{1}^{b} \\frac{1}{x^3} \\: dx \\).",
                "Integre \\( \\frac{1}{x^3} \\) usando a regra da potência: \\( \\int x^{-3} \\: dx = - \\frac{1}{2x^2} \\).",
                "A integral se torna \\( \\left[ - \\frac{1}{2x^2} \\right]_{1}^{b} = - \\frac{1}{2b^2} + \\frac{1}{2} \\).",
                "Agora, aplique o limite: \\( \\lim_{b \\to \\infty} \\left( - \\frac{1}{2b^2} + \\frac{1}{2} \\right) = \\frac{1}{2} \\)."
            ],
            "solution": "F(x) = \\frac{1}{2}."
        }
    ],
    "aplication": "<center><h3>Aplicação</h3></center>\n\nAs integrais impróprias aparecem frequentemente em problemas de física e engenharia, como no cálculo de áreas e volumes de regiões limitadas por curvas que se estendem infinitamente ou no cálculo de valores médios de funções em intervalos infinitos. Um exemplo comum é o cálculo de fluxos e áreas em torno de distribuições de probabilidades, como a função de distribuição exponencial, onde a integral imprópria é usada para modelar a vida útil média de um componente ou a intensidade de radiação em distâncias grandes <br><br>"
}
    
];


let currentLesson = 0;

const lessonTitle = document.getElementById("lessonTitle");
const lessonImage = document.getElementById("lessonImage");
const lessonSummary = document.getElementById("lessonSummary");
const lessonExercises = document.getElementById("lessonExercises");
const lessonSelect = document.getElementById("lessonSelect");
const lessonAplication = document.getElementById("lessonAplication");

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


    if (index === 0){
        lessonExercises.innerHTML = "";
        lessonAplication.innerHTML = "";

        return ``;
    } else {        
        // Atualiza a lista de exercícios com LaTeX e passos
        lessonExercises.innerHTML = lesson.exercises.map(exercise => {
            let stepsHtml = '';
            if (exercise.steps) {
                stepsHtml = `
                    <ol>
                        ${exercise.steps.map(step => `<li>${step}</li>`).join("")}
                    </ol>
                `;
            }
        
            return `
                <li>
                    <br>
                    <strong>Exercício:</strong> Calcule  \\( ${exercise.question} \\)<br>
                    ${stepsHtml}
                    <strong>Resolução:</strong> A solução é \\( ${exercise.solution} \\)
                </li>
            `;
        }).join(""); 

        lessonAplication.innerHTML = lesson.aplication;
       
        MathJax.typeset(); // Atualiza as expressões LaTeX

    }
    lessonSelect.value = index;
}

function navigateLesson(direction) {
    const newIndex = currentLesson + direction;
    if (newIndex >= 0 && newIndex < lessons.length) {
        loadLesson(newIndex);
        window.scrollTo(0, 0);
    }
}


function selectLesson() {
    const selectedLesson = parseInt(lessonSelect.value);
    loadLesson(selectedLesson);
}

loadLessonOptions();
loadLesson(0);