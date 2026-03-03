# Qué es la Inteligencia Artificial

Una guía introductoria para entender qué es la Inteligencia Artifical, entender cómo funcionan los modelos de aprendizaje automático detrás de estas tecnologías, y profundizar sobre los modelos de lenguaje y otros conceptos que es necesario entender cuando hablamos de IA. 
## Conceptos Clave

| Concepto                     | Definición breve                                                                                                      |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Inteligencia Artificial (IA) | Sistemas informáticos que realizan tareas cognitivas: interpretar habla, identificar patrones, hacer predicciones     |
| Machine Learning (ML)        | Algoritmos que aprenden de datos sin ser programados explícitamente                                                   |
| Deep Learning                | Redes neuronales con múltiples capas. Son "profundos" porque contienen muchas capas, no porque son "más inteligentes" |
| LLM (Large Language Model)   | Modelos de lenguaje generativos que predicen la siguiente palabra más probable                                        |
| Transformer                  | Arquitectura de red neuronal con mecanismo de "atención" (Google, 2017)                                               |
| Inferencia                   | Cuando un modelo ya entrenado aplica lo aprendido a datos nuevos                                                      |
| Tokenización                 | Proceso de dividir texto en fragmentos numéricos que el modelo puede procesar                                         |
| IA generativa                | IA que crea contenido nuevo (texto, imagen, audio, video)                                                             |
| IA discriminativa            | IA que clasifica o distingue entre categorías                                                                         |
| IA agnética (Agentic AI)     | Sistemas de IA que actúan de forma autónoma para lograr objetivos, ejecutando múltiples acciones en secuencia         |

## ¿Qué es la IA?

La inteligencia artificial es el desarrollo de sistemas informáticos capaces de realizar tareas asociadas a funciones cognitivas humanas: interpretar el habla, identificar patrones, hacer predicciones y resolver problemas. Se compone de varias tecnologías, como el aprendizaje de máquina (Machine Learning) y el aprendizaje profundo (Deep Learning), que permiten a las computadoras aprender de datos y hacer predicciones o tomar decisiones basadas en ellos [13, 9].

!!! abstract "Mensaje central"
    **La IA no es magia. Son matemáticas y estadística aplicada.**

Puntos clave:
- Es una rama de las ciencias de la computación, no una entidad mágica ni consciente [13]
- Existe desde 1956 (Conferencia de Dartmouth); lo nuevo es la escala de cómputo y datos [8, 13]
- ChatGPT es solo un tipo de IA — hay muchos más en uso cotidiano [9, 10]

## IA en la Vida Cotidiana

¿Cuántas de estas herramientas usas al día? Probablemente más de las que crees.  La IA no está solo en ChatGPT. Las redes sociales (TikTok, Instagram, Facebook) usan algoritmos de IA para decidir qué contenido mostrar. Netflix y Spotify aprenden de lo que consumimos. Google Maps predice tráfico con datos de millones de teléfonos. La corrección automática del teclado predice palabras basándose en patrones. Los filtros de Snapchat e Instagram usan visión por computadora [9, 10].

| Aplicación                        | Tipo de IA                              | Lo que hace                                                     |
| --------------------------------- | --------------------------------------- | --------------------------------------------------------------- |
| TikTok, Instagram, Facebook       | ML + análisis de comportamiento         | Decide qué contenido mostrar y en qué orden                     |
| Netflix, Spotify                  | Sistemas de recomendación               | Aprende de lo que ves/escuchas para sugerirte contenido         |
| Google Maps                       | Predicción + optimización               | Datos de millones de teléfonos para predecir tráfico            |
| ChatGPT, Claude, Gemini           | LLM (modelo de lenguaje de gran tamaño) | Predice la siguiente palabra más probable                       |
| Corrección automática del teclado | Natural Language Processing             | Predice qué palabra viene después                               |
| Filtros de Snapchat/Instagram     | Visión por computadora                  | Detecta rostros y aplica efectos en tiempo real                 |
| Google Translate, DeepL           | Natural Language Processing             | Modelos entrenados con millones de textos en diferentes idiomas |

## Los "Ingredientes" de un Modelo de IA

Si pensamos en un modelo de IA como una receta, necesitamos varios ingredientes clave:

### 1. Datos — La materia prima
Un modelo necesita miles o millones de ejemplos para aprender. Para entrenar un modelo que reconozca gatos, se necesitan miles de fotos de gatos. Aquí es importante preguntarnos, ¿quién genera estos datos? ¿quién los sistematiza? ¿qué historias se cuentan a partir de ellos? 
!!! tip "Escucha: Datos y políticas públicas"
    Si quieres saber más sobre la relación de los datos y el impacto en políticas públicas, escucha el episodio de Hijas de Internet con @tacosdedatos sobre la importancia de los datos en la toma de decisiones.

    <iframe src="https://creators.spotify.com/pod/profile/hijas-de-internet/embed/episodes/T3-EP-6--Datos-y-polticas-pblicas-e1alhpe/a-a6uv6rb" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

### 2. Algoritmo — La receta
Un algoritmo es un conjunto de reglas matemáticas que le dice al modelo cómo procesar datos y encontrar patrones [13]. Existen distintos tipos de algoritmos de aprendizaje, y la elección depende de la tarea y los datos disponibles [13, 14]:

- **Supervisado:** El modelo aprende de datos etiquetados — ejemplos donde ya conocemos la respuesta correcta. Por ejemplo, miles de fotos ya clasificadas como "gato" o "perro". El modelo aprende a asociar las características de la imagen con la etiqueta correcta [13].
- **No supervisado:** El modelo encuentra patrones sin etiquetas. No le decimos qué buscar; el algoritmo descubre por sí mismo agrupaciones o estructuras en los datos. Por ejemplo, agrupar clientes con comportamientos de compra similares [13].
- **Por refuerzo:** El modelo aprende por prueba y error, recibiendo recompensas cuando acierta y penalizaciones cuando se equivoca. Así se entrenó AlphaGo para jugar Go, y así se alinean los modelos de lenguaje con preferencias humanas mediante RLHF [13, 14].
### 3. Tarea — El objetivo
Lo que queremos que el modelo haga: clasificar, predecir, generar o traducir [13].

### 4. Entrenamiento — Practicar
Así como una persona aprende con la práctica, un modelo prueba una y otra vez con los datos, ajustándose cuando se equivoca. Es como estudiar para un examen con tarjetas didácticas, pero haciendo millones de repeticiones [13, 10]. Durante el entrenamiento, el modelo ajusta millones de parámetros internos (llamados "pesos") hasta minimizar sus errores. El tipo de entrenamiento depende del algoritmo: en el supervisado, el modelo compara sus predicciones con las respuestas correctas; en el no supervisado, busca patrones y agrupaciones; en el de refuerzo, optimiza una función de recompensa [13].

### 5. Validación — El examen
Una vez entrenado, el modelo se prueba con datos que nunca ha visto antes para verificar si realmente aprendió patrones generalizables o solo memorizó los ejemplos de entrenamiento [13]. Este paso es crucial: un modelo que solo memoriza (lo que se llama *overfitting*) puede tener un rendimiento perfecto con sus datos de entrenamiento pero fallar con datos nuevos. La validación funciona como un examen sorpresa — si el modelo realmente aprendió, puede responder preguntas que nunca vio [13, 10].

### 6. Fine-tuning y RLHF — De modelo base a modelo alineado
Un modelo de lenguaje entrenado con texto de Internet puede predecir palabras, pero no necesariamente sigue instrucciones ni se alinea con valores humanos. Para cerrar esa brecha, se utilizan dos técnicas adicionales:

**Fine-tuning supervisado (SFT):** Se toma el modelo base y se entrena con ejemplos de comportamiento deseado — pares de pregunta-respuesta donde un humano escribió la respuesta "correcta". Es como enseñar con ejercicios resueltos [14, 15].

**RLHF (Reinforcement Learning from Human Feedback):** En lugar de dar respuestas "correctas" únicas, evaluadores humanos comparan pares de respuestas del modelo y eligen cuál es mejor. Con esas comparaciones se entrena un "modelo de recompensa" que aprende a predecir qué respuestas prefieren los humanos. Luego el modelo se optimiza para maximizar esas recompensas [14, 15].

!!! example "InstructGPT: el tamaño no lo es todo"
    El ejemplo histórico más importante es **InstructGPT** (Ouyang et al., 2022): un modelo de 1.3 mil millones de parámetros entrenado con SFT+RLHF superó al GPT-3 de 175 mil millones de parámetros en evaluaciones humanas [14]. Esto demostró que el tamaño del modelo no es lo único que importa — la *alineación con preferencias humanas* es igualmente crítica.

Hoy, todos los modelos comerciales (ChatGPT, Claude, Gemini, Llama) siguen este patrón: entrenamiento base → fine-tuning supervisado → RLHF [14, 15].

### 7. Inferencia — Cuando nos exponemos a los modelos
Cuando el modelo ya entrenado aplica lo aprendido a datos nuevos. Cuando alguien le pregunta algo a ChatGPT, el modelo no está "entrenando", está haciendo inferencia [10].

## La Jerarquía: IA > ML > Deep Learning

### Inteligencia Artificial (campo amplio)
Sistemas que imitan capacidades cognitivas humanas. Incluye reglas, lógica y sistemas expertos [13, 9].

### Machine Learning / Aprendizaje Automático (subconjunto de IA)
Algoritmos que aprenden de datos sin programación explícita [13, 9]. 

### Deep Learning / Aprendizaje Profundo (subconjunto de ML)
Redes neuronales artificiales con múltiples capas de procesamiento. "Profundo" se refiere a la arquitectura con muchas capas, no a que sea más inteligente [13, 10].

**¿Dónde está ChatGPT?** Dentro de Deep Learning. Es un Transformer (un tipo específico de red neuronal profunda) entrenado con aprendizaje profundo [6, 10].

## Redes Neuronales — Cómo Funciona el Deep Learning

Una red neuronal está organizada en capas:

1. **Capa de entrada:** Recibe datos iniciales (texto, imagen, números) [13, 10]
2. **Capas ocultas:** Procesamiento — cada capa aprende patrones progresivamente más complejos [13, 10]
3. **Capa de salida:** Produce el resultado (predicción, clasificación, texto generado) [13, 10]

Lo "profundo" = muchas capas ocultas (decenas, cientos o miles). Cada "neurona" está conectada con otras mediante "pesos", números que se ajustan millones de veces durante el entrenamiento [13].

## Modelos Discriminativos vs. Generativos

La mayoría de la IA cotidiana es discriminativa: el algoritmo de TikTok decidiendo qué mostrarte en tu feed, el filtro de tu correo que decide qué es spam, Google Maps prediciendo tráfico o Google prediciendo el clima. Los modelos generativos (ChatGPT, Claude, Gemini) son los más conocidos, pero son solo una parte del ecosistema de modelos de IA utilizados desde hace más de 50 años [10, 9].

|               | Discriminativos                                           | Generativos                         |
| ------------- | --------------------------------------------------------- | ----------------------------------- |
| **Qué hacen** | Clasifican o distinguen entre categorías                  | Crean contenido nuevo               |
| **Pregunta**  | "¿Qué es esto?"                                           | "¿Cómo sería algo como esto?"       |
| **Ejemplos**  | Filtro de spam, reconocimiento facial, diagnóstico médico | ChatGPT, DALL-E, Midjourney, Suno   |
| **Analogía**  | Un crítico de arte que distingue estilos                  | Un artista que pinta cuadros nuevos |

## Cómo Funciona ChatGPT: El "Loro Estocástico"

### Qué son los modelos grandes de lenguaje (LLMs)
La inteligencia artificial generativa crea contenido nuevo, como texto, imágenes, audio o video, en lugar de solo clasificar o predecir. ChatGPT fue entrenado leyendo enormes cantidades de texto de Internet y aprendió patrones estadísticos sobre cómo las palabras se relacionan entre sí [10].

### Cómo generan texto los LLMs
El modelo predice cuál es la siguiente palabra más probable, luego la siguiente, y así sucesivamente. **No "entiende" lo que dice**, predice basándose en patrones estadísticos [7, 10].

### "Cotorros estocásticos" (Stochastic Parrots)
Este término fue acuñado por las investigadoras Emily Bender y Timnit Gebru (2021) [7]. La metáfora sugiere que estos modelos son como loros sofisticados que combinan patrones de lenguaje sin comprender su significado.

!!! warning "Implicaciones"
    - Pueden generar texto convincente pero completamente falso (**alucinaciones**)
    - Reproducen los sesgos de sus datos de entrenamiento [7]
    - Fueron entrenados principalmente con texto de Internet en inglés, de sitios web creados mayoritariamente por hombres, blancos, del Norte Global [7]

> "Estos modelos son como espejos de la sociedad que los creó."

**Sobre Timnit Gebru:** Investigadora eritreo-etíope-estadounidense en ética de la IA. En diciembre de 2020, su empleo en Google terminó en circunstancias disputadas por el paper "On the Dangers of Stochastic Parrots" [7]. Aproximadamente 2,700 empleados firmaron una carta de protesta. Es cofundadora de Black in AI y fundadora del Distributed Artificial Intelligence Research Institute (DAIR). Su caso es emblemático sobre el poder de las grandes empresas tecnológicas sobre la investigación crítica.
![Timnit Gebru](images/timnit-gebru.png)
<!-- TODO: Renombrar y agregar la imagen a la carpeta images/ del repositorio -->
## La Arquitectura Transformer

En 2017, un equipo de Google publicó "Attention Is All You Need" — el paper que introdujo la arquitectura Transformer, que cuenta más de 173,000 citas académicas[6]. El mecanismo de "atención" permite al modelo enfocarse en las partes más relevantes del texto de entrada al generar cada palabra de salida [6].

Los modelos anteriores (redes recurrentes) procesaban texto palabra por palabra, en secuencia. Los Transformers procesan todo en paralelo, lo que los hace mucho más rápidos y permite modelos más grandes [6, 10].
## Conceptos Técnicos Clave

### Tokenización
Los LLMs nunca "ven" texto directamente. El texto se divide en "tokens" — fragmentos que se convierten en números. Un token equivale a aproximadamente 4 caracteres en inglés. El vocabulario de GPT-4 tiene 100,258 tokens [10].

!!! info "Implicación para el español"
    Los modelos entrenados principalmente en inglés son menos eficientes con español — necesitan más tokens para representar el mismo contenido, lo que puede significar respuestas más cortas y potencialmente menos precisas [7, 10].

### Temperatura
Controla la aleatoriedad de las respuestas. Baja = respuestas predecibles. Alta = respuestas diversas pero potencialmente incoherentes [10]. Es como el "volumen de creatividad."

### Ventana de contexto
La cantidad máxima de texto que un LLM puede procesar en una interacción [10]:
- 2023: 4,000-8,000 tokens (~3,000-6,000 palabras)
- 2025: 200,000+ tokens (~150,000 palabras)
- Algunos modelos: 1,000,000+ tokens

Si la conversación excede la ventana, el modelo "olvida" el inicio.

## IA Agnética (Agentic AI)

Sistemas de IA que actúan de manera autónoma para lograr objetivos específicos, realizando múltiples acciones en secuencia sin intervención humana constante [9].

La principal diferencia con ChatGPT y otros chatbots es que estas aplicaciones responden a prompts individuales, mientras que un agente de IA puede planear, ejecutar tareas complejas y adaptarse según los resultados [9]

**Ejemplo:** En lugar de pedir "escríbeme un análisis de mercado" y recibir una respuesta, un agente podría buscar datos en internet, organizarlos, hacer el análisis, crear visualizaciones y escribir un reporte completo.

!!! danger "Advertencia"
    Los agentes de IA requieren supervisión humana. No son todavía lo suficientemente confiables para tareas críticas sin supervisión. Deben usarse para aumentar la productividad, no para reemplazar el criterio humano. **Nunca compartas contraseñas, información bancaria o datos sensibles con estos sistemas.**

## Breve Historia de la IA

La IA tiene 70 años de historia. Los "inviernos" ocurrieron porque se prometió demasiado — un patrón que se repite hoy. Lo que habilitó la IA moderna: más datos + más cómputo (GPUs) + mejores algoritmos (Transformers) [1, 6, 9]. Desde 2019, el poder de cómputo para IA se duplica cada ~10 meses [1].

| Año       | Hito                                                          | Por qué importa                                                                                                                         |
| --------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1950      | Alan Turing publica "Computing Machinery and Intelligence"    | Primera formulación teórica de "¿pueden pensar las máquinas?" Propone el Test de Turing: si no puedes distinguir una máquina de un humano en una conversación, ¿la máquina "piensa"? [8, 13] |
| 1956      | Conferencia de Dartmouth — se acuña "Inteligencia Artificial" | John McCarthy, Marvin Minsky y otros investigadores fundan oficialmente el campo. Prometen que en una generación las máquinas harían todo lo que un humano puede hacer [8, 13] |
| 1966      | ELIZA (MIT) — primer chatbot                                  | Creado por Joseph Weizenbaum, simulaba un psicoterapeuta usando reglas simples de sustitución de texto [8]. Ya entonces la gente le atribuía "comprensión" a un programa simple — el mismo fenómeno que ocurre hoy con ChatGPT [7] |
| 1974-1980 | Primer "invierno de la IA"                                    | El Reporte Lighthill (1973, Reino Unido) criticó devastadoramente a la IA por no cumplir sus promesas. DARPA retiró fondos. La IA había generado expectativas imposibles de cumplir [8, 13] |
| 1987-1993 | Segundo "invierno de la IA"                                   | Los "sistemas expertos" — programas basados en reglas para tareas específicas — resultaron frágiles y carísimos de mantener. El proyecto japonés de Quinta Generación fracasó. Otra década de decepción [8, 13] |
| 1997      | Deep Blue (IBM) derrota a Kasparov en ajedrez                 | Primera vez que una máquina supera al campeón mundial en una tarea cognitiva específica. Pero Deep Blue usaba fuerza bruta (200 millones de posiciones/segundo), no "inteligencia" [8] |
| 2011      | Siri (Apple) — primer asistente virtual masivo                | La IA sale de los laboratorios y llega al bolsillo de millones de personas como producto de consumo [8] |
| 2012      | AlexNet gana ImageNet                                         | La red neuronal de Geoffrey Hinton y Alex Krizhevsky demostró que el deep learning con GPUs era dramáticamente superior a los métodos anteriores para clasificar imágenes. Punto de inflexión del campo [8, 13] |
| 2016      | AlphaGo (DeepMind) derrota al campeón mundial de Go           | Go tiene más posiciones posibles que átomos en el universo — la fuerza bruta no alcanza. AlphaGo combinó deep learning con aprendizaje por refuerzo [8] |
| 2017      | "Attention Is All You Need" (Google)                          | El paper que introdujo la arquitectura Transformer y el mecanismo de "atención". Con 173,000+ citas, es la base de todos los LLMs actuales (GPT, Claude, Gemini, Llama) [6] |
| 2020      | GPT-3 (OpenAI)                                                | Con 175 mil millones de parámetros, primera demostración masiva de que un modelo de lenguaje podía generar texto coherente en múltiples tareas sin entrenamiento específico [9] |
| 2022      | InstructGPT y ChatGPT                                         | InstructGPT demostró que RLHF podía alinear modelos con preferencias humanas [14]. ChatGPT se lanzó al público el 30 de noviembre y alcanzó 100 millones de usuarios en 2 meses — récord histórico de adopción [3] |
| 2023-2026 | Explosión de IA generativa                                    | Imágenes (DALL-E, Midjourney), video (Sora), audio (Suno), agentes de IA autónomos. Los modelos se vuelven multimodales: procesan texto, imagen, audio y código [1, 9] |

## Recursos Recomendados

### Herramientas interactivas (sin programar)
- **Teachable Machine (Google):** https://teachablemachine.withgoogle.com/ — Entrena tu primer modelo de IA sin código
- **TensorFlow Playground:** https://playground.tensorflow.org/ — Visualiza cómo aprenden las redes neuronales
- **Google Quick, Draw!:** https://quickdraw.withgoogle.com/ — Dibuja y ve cómo una IA adivina qué es
- **Embedding Visualization:** https://helboukkouri.github.io/embedding-visualization/ — Ve cómo la IA representa palabras como números
- **Google Colab:** https://colab.research.google.com/ — Notebooks de Python gratis en tu navegador
- **Hugging Face:** https://huggingface.co/ — Prueba miles de modelos de IA ya entrenados

### Cursos gratuitos
- **Elements of AI (en español):** https://www.elementsofai.com/es/
- **Google AI - Intro al ML (español):** https://cloud.google.com/learn/training/machinelearning-ai?hl=es
- **Fast.ai:** https://www.fast.ai/
- **Anthropic Courses:** https://anthropic.skilljar.com/

### Videos
- **3Blue1Brown — "Cómo funciona ChatGPT":** https://www.youtube.com/watch?v=wjZofJX0v4M
- **3Blue1Brown — "What is a neural network?":** https://www.youtube.com/watch?v=aircAruvnKk
- **DotCSV (en español):** Canal de YouTube sobre IA con explicaciones visuales

### Lecturas
- **Anthropic — "Past, Present, Future of AI":** https://cdn.prod.website-files.com/68a89ee4a2b77491c31e8ae5/68cc6a3a6e848100068d6cf3_T1_Past%2C%20present%2C%20future%20of%20AI%20(15m).pdf
- **Anthropic — "Intro to Generative AI":** https://cdn.prod.website-files.com/68a89ee4a2b77491c31e8ae5/68d1c2e1c9196fae1645b0c7_Intro%20to%20Generative%20AI%20(20m).pdf
- **IBM — Historia de la IA:** https://www.ibm.com/es-es/think/topics/history-of-artificial-intelligence

### Perspectiva crítica
- **AI Now Institute:** https://ainowinstitute.org/
- **Data & Society:** https://datasociety.net/

### Paper técnico clave
- **"Attention Is All You Need" (Vaswani et al., 2017):** https://arxiv.org/abs/1706.03762

---

## Fuentes

| #   | Fuente                                                                                                            | Tipo                    |
| --- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1   | Stanford AI Index Report 2024                                                                                     | Reporte anual           |
| 2   | Epoch AI (2024) — arxiv.org/html/2405.21015v2                                                                     | Paper técnico           |
| 3   | DemandSage / Backlinko (2026) — demandsage.com/chatgpt-statistics/                                                | Estadísticas            |
| 4   | CEPAL (2024) — cepal.org/en/pressreleases/latin-america-and-caribbean-accelerate-adoption-artificial-intelligence | Reporte regional        |
| 5   | UNESCO (2024)                                                                                                     | Reporte educativo       |
| 6   | Vaswani et al. (2017) — "Attention Is All You Need" — arxiv.org/abs/1706.03762                                    | Paper fundacional       |
| 7   | Bender & Gebru (2021) — "On the Dangers of Stochastic Parrots"                                                    | Paper crítico           |
| 8   | IBM — Historia de la IA — ibm.com/es-es/think/topics/history-of-artificial-intelligence                           | Artículo divulgativo    |
| 9   | Anthropic — "Past, Present, Future of AI"                                                                         | Lectura técnica         |
| 10  | Anthropic — "Intro to Generative AI"                                                                              | Lectura técnica         |
| 11  | QS Insights Magazine (2025)                                                                                       | Ranking educativo       |
| 12  | Alcor (2024), Mexico News Daily (2025), Global Policy Watch (2025)                                                | Artículos periodísticos |
| 13  | Russell & Norvig — "Artificial Intelligence: A Modern Approach"                                                   | Libro de texto          |
| 14  | Ouyang et al. (2022) — "Training language models to follow instructions with human feedback" — arxiv.org/abs/2203.02155 | Paper (InstructGPT/RLHF) |
| 15  | IBM — "What Is RLHF?" — ibm.com/think/topics/rlhf                                                                | Artículo divulgativo    |

---

*Contenido basado en investigación y materiales educativos del proyecto Descifrando la IA (2026).  
