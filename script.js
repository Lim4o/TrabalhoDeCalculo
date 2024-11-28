const lessons = [
    {
        "title": "Resumo",
        "image": "imagens/resumocalculo.png",
        "summary": "O Cálculo 2 é uma disciplina essencial que aprofunda o estudo do Cálculo Diferencial e Integral, com foco em integrais, séries e suas aplicações. Este resumo aborda os principais conceitos, propriedades e métodos de integração, explorando integrais indefinidas e definidas, além de técnicas avançadas como frações parciais e integrais por partes. A integração é crucial para resolver problemas envolvendo áreas, volumes e modelagem de fenômenos físicos e matemáticos. As integrais indefinidas são utilizadas para encontrar a antiderivada de funções, resultando em uma família de soluções expressa em função da constante de integração \(C\). Já as integrais definidas são usadas para calcular áreas sob curvas, e o Teorema Fundamental do Cálculo facilita a avaliação de integrais com limites. O estudo de técnicas de integração, como substituição trigonométrica, frações parciais e integração por partes, permite resolver problemas mais complexos. As aplicações de Cálculo 2 incluem o cálculo de comprimento de arco, volumes de sólidos de revolução e áreas entre curvas, sendo amplamente utilizado em física, engenharia e ciências computacionais."
    },
    {
        "title": "Aula 1: Cálculo da Diferencial com uma variável",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 2: Conceito e Exemplos de Integrais Indefinidas.",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 3: Conceito, Notação e Exemplos de Integrais Indefinidas",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },   
    {
        "title": "Aula 4: Exemplos e Exercícios de Integrais Indefinidas: Aprofundamento",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 5: Conceito, Propriedades e Exemplos de Integrais Definidas",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 6: Aprofundamento em Integrais Definidas: Conceito e Exemplos",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 7: Conceito e Exemplos de Integrais Definidas: Cálculo de Área",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 8: Conceito e Exemplos de Integrais Definidas: Cálculo de Área entre Curvas",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    {
        "title": "Aula 9: Cálculo da Diferencial e Integrais",
        "image": "imagens/imgemAula.jpg",
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
        ]
    },
    //Fazer o mesmo para as proximas.
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
    },
    
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
                <strong>Exercício:</strong> Calcule a diferencial de \\( ${exercise.question} \\)<br>
                ${stepsHtml}
                <strong>Resolução:</strong> A solução é \\( ${exercise.solution} \\)
            </li>
        `;
    }).join(""); 

    lessonSelect.value = index;
    MathJax.typeset(); // Atualiza as expressões LaTeX
}


// function loadLesson(index) {
//     currentLesson = index;
//     const lesson = lessons[index];
//     lessonTitle.textContent = lesson.title;
//     lessonImage.src = lesson.image;
//     lessonSummary.textContent = lesson.summary;

//     // Atualiza a lista de exercícios com LaTeX e passos
//     lessonExercises.innerHTML = lesson.exercises.map(exercise => {
//         let stepsHtml = '';
//         if (exercise.steps) {
//             stepsHtml = `
//                 <ol>
//                     ${exercise.steps.map(step => {
//                         // Verifica se o step contém LaTeX
//                         if (step.includes("\\(") && step.includes("\\)")) {
//                             return `<li>${step}</li>`;
//                         } else {
//                             return `<li>${step}</li>`; // Não interpretar como LaTeX se não for
//                         }
//                     }).join("")}
//                 </ol>
//             `;
//         }

//         return `
//             <li>
//                 <strong>Exercício:</strong> Calcule a diferencial de \\( ${exercise.question} \\)<br>
//                 ${stepsHtml}
//                 <strong>Resolução:</strong> A solução é \\( ${exercise.solution} \\)
//             </li>
//         `;
//     }).join(""); 

//     lessonSelect.value = index;
//     MathJax.typeset();
// }





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