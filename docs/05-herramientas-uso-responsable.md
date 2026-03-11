# Herramientas y uso ético y responsable de la IA

## Separar la señal del ruido

A lo largo de esta serie, construimos las bases para entender qué hay detrás de la inteligencia artificial: [cómo funcionan los modelos](01-que-es-la-ia.md), [los sesgos que reproducen](02-sesgos-algoritmicos.md), [su costo ambiental](03-impactos-ambientales.md), y [cómo están transformando el trabajo](04-futuro-del-trabajo.md). Ahora la pregunta es más personal: ¿qué haces tú con todo esto?

<!-- TODO: Add 05_HerramientasIA.png -->

El 66% de la población mexicana ya usa alguna herramienta de IA[^11] y el 88% de estudiantes universitarios la utiliza para tareas académicas.[^9] Pero usar una herramienta no es lo mismo que entenderla. En medio de la avalancha de información y nuevas herramientas cada semana, distinguir la señal del ruido se ha vuelto una habilidad en sí misma.

Este módulo es una guía para desarrollar esa habilidad: aprender a usar la IA de forma ética y responsable, con los filtros necesarios para no dejarte llevar por las tendencias, y con la perspectiva crítica para identificar las herramientas que sí marcarán el desarrollo de estas tecnologías en los próximos años.

## La destreza fundamental: comprensión crítica de la IA

Antes de aprender cualquier herramienta, necesitas un filtro mental. Los modelos de IA producen texto que *suena* autoritativo y profesional, incluso cuando es completamente falso. Las alucinaciones no vienen con advertencia. Las cifras pueden ser inventadas. Las citas académicas pueden no existir.[^1]

### El método SIFT

Desarrollado por Mike Caulfield para verificación de información digital, el método SIFT se adapta perfectamente para evaluar outputs de IA:[^18]

| Paso | Significado | Aplicación a IA |
|------|-----------|----------------|
| **S** - Stop | Para. No actúes inmediatamente | Antes de usar o compartir un output de IA, detente. No confíes automáticamente en texto que suena profesional |
| **I** - Investigate | Investiga la fuente | ¿Quién creó la herramienta? ¿Cuáles son sus limitaciones? ¿Con qué datos fue entrenada? |
| **F** - Find better coverage | Busca mejores fuentes | Contrasta afirmaciones con fuentes autoritativas: organismos oficiales, datos abiertos, papers académicos |
| **T** - Trace to original | Rastrea al original | Si la IA cita una fuente, **verifícala**. Busca el paper o artículo real. Muchas citas de IA son inventadas |

### Lo que la IA no puede hacer (todavía)

Estas limitaciones no son barreras temporales, son características estructurales de cómo funcionan los modelos actuales:

- **Fabrican hechos con confianza.** Las alucinaciones son inherentes al funcionamiento estadístico del modelo. Son [*cotorros estocásticos*](01-que-es-la-ia.md#cotorros-estocasticos-stochastic-parrots): predicen patrones, no entienden causalidad.[^25]
- **Prefieren darte la razón.** El sesgo de sicofancia hace que tiendan a estar de acuerdo contigo en lugar de desafiarte.
- **No saben lo que no saben.** Tienen fechas de corte, lagunas culturales (~4% de datos de entrenamiento en español[^13]), y poca confiabilidad cuantitativa.
- **No son enteramente reproducibles.** El mismo prompt puede dar respuestas diferentes en momentos diferentes.
- **Pueden omitir lo importante.** Los modelos actuales pueden "mentir por omisión," presentando información parcial como si fuera completa.[^1]

!!! danger "Las citas de IA pueden ser inventadas"
    Si una estadística o cita suena perfecta, probablemente sea fabricada. Siempre verifica estadísticas contra fuentes oficiales y citas académicas en Google Scholar o el sitio de la revista.

### Deepfakes: cuando los datos mismos son fabricados

El problema de verificación se intensifica cuando ya no solo el texto, sino la imagen, el audio y el video pueden ser generados:

- **8 millones de deepfakes** proyectados para 2025 (vs. 500,000 en 2023)[^14]
- El volumen de video deepfake crece al **900% anual**[^14]
- Europol estima que el **90% del contenido en línea podría ser sintético para 2026**[^16]
- Los humanos identificaron deepfakes de alta calidad solo el **24.5% del tiempo**[^14]
- De los 25 deepfakes más populares, **96% contienen pornografía**. El **77% de las víctimas de deepfakes son mujeres**.[^15]  

!!! warning "Verificar ya no es opcional"
    Cuando los datos mismos pueden ser fabricados con IA, verificar fuentes se convierte en una habilidad de supervivencia profesional e informativa.

## El marco de las 4D: Delegación, Descripción, Discernimiento, Diligencia

Saber que la IA tiene limitaciones es necesario, pero no suficiente. Necesitas un marco para decidir *cómo* interactuar con ella. El **AI Fluency Framework** de Anthropic propone que la fluidez en IA es "la capacidad de trabajar de manera **efectiva, eficiente, ética y segura** dentro de las modalidades emergentes de interacción humano-IA."[^28]
### Las 4D

| Competencia | Qué implica | Preguntas clave |
|-------------|------------|-----------------|
| **Delegación** | Decidir *si*, *cuándo* y *cómo* usar IA. Entender qué tareas son para humanos, cuáles para IA, y cuáles colaborativas | ¿Esta tarea se beneficia de IA? ¿Qué herramienta es la adecuada? ¿Cuáles son sus limitaciones? |
| **Descripción** | Comunicar tu visión de forma que la IA produzca resultados útiles. Traducir lo que necesitas a términos que el modelo entienda | ¿Mi prompt es específico? ¿Estoy definiendo formato, tono, audiencia? ¿Divido tareas complejas en pasos? |
| **Discernimiento** | Evaluar críticamente lo que la IA produce. No solo la calidad del output, sino si el proceso colaborativo está funcionando | ¿Este resultado es preciso? ¿Las fuentes existen? ¿La colaboración está siendo productiva o me estoy volviendo dependiente? |
| **Diligencia** | Asumir responsabilidad por lo que produces con IA. Verificar, ser transparente sobre el uso de IA, y considerar el impacto | ¿Verifiqué los hechos? ¿Estoy siendo transparente sobre cómo usé IA? ¿Consideré el impacto en otros? |

### Tres modos de interacción

El framework distingue tres maneras de trabajar con IA, cada una con diferentes niveles de autonomía:[^28]

| Modo | Qué pasa | Ejemplo | Nivel de supervisión |
|------|---------|---------|---------------------|
| **Automatización** | La IA ejecuta una tarea definida por el humano | Resumir un documento, generar un correo | Bajo (revisar resultado) |
| **Aumentación** | Humano e IA co-crean iterativamente | Escribir un ensayo juntos, analizar datos complejos | Medio (colaboración continua) |
| **Agencia** | El humano configura la IA para actuar independientemente | Un chatbot que atiende clientes, un agente que monitorea datos | Alto (diseño + monitoreo) |

A mayor autonomía de la IA, mayor responsabilidad humana en el diseño, la supervisión y la rendición de cuentas.

### Human-in-the-loop: el principio de supervisión humana

El concepto de *human-in-the-loop* (HITL) establece que los sistemas de IA deben mantener a un ser humano en puntos críticos de decisión.  La Ley de IA de la Unión Europea exige supervisión humana para todos los sistemas clasificados como de "alto riesgo," incluyendo educación, empleo, migración y justicia.[^23] El principio es claro: a mayor impacto potencial en la vida de las personas, mayor debe ser la intervención humana.

!!! abstract "Las 4D en la práctica"
    - **Delegación** te dice *si* debes usar IA para esta tarea
    - **Descripción** te dice *cómo* pedirle lo que necesitas
    - **Discernimiento** te dice *si el resultado sirve*
    - **Diligencia** te dice *qué responsabilidad asumes*

    Las cuatro se necesitan. Sin Delegación, usas IA cuando no deberías. Sin Descripción, obtienes resultados poco útiles. Sin Discernimiento, aceptas esos resultados. Sin Diligencia, las publicas.

## Aprender a hablarle a la IA: del prompt al contexto

La segunda D, Descripción, es donde la mayoría de las personas usuarias de IA se quedan cortas. Un *prompt* es la instrucción que le das a un modelo de IA. La calidad de la respuesta depende directamente de la calidad de la pregunta, no es diferente de formular una buena pregunta de investigación.[^21]

Pedirle a ChatGPT "háblame de inflación" es como entrar a una biblioteca y gritar "¡economía!" La respuesta será genérica. Pero pedirle *"Explica las causas de la inflación en México entre 2021-2024, enfocándote en los factores de oferta, y compara con la experiencia de Brasil y Colombia"* produce algo utilizable.

### Cinco técnicas principales

| Técnica              | Qué es                                   | Ejemplo                                                                                      |
| -------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Zero-shot**        | Pedir algo sin dar ejemplos              | "Resume este artículo en 3 puntos clave"                                                     |
| **Few-shot**         | Dar 2-3 ejemplos del formato deseado     | "Aquí hay 2 ejemplos de cómo quiero el resumen: [ej. 1] [ej. 2]. Ahora resume este artículo" |
| **Chain-of-thought** | Pedir que razone paso a paso             | "Analiza este problema paso a paso antes de dar tu conclusión final"                         |
| **Role prompting**   | Asignar un rol al modelo                 | "Eres una economista especializada en política monetaria mexicana. Analiza..."               |
| **System prompt**    | Instrucción que define el comportamiento | "Siempre cita fuentes. Responde en español. Cuando no sepas algo, dilo."                     |

??? example "Framework CO-STAR para prompts estructurados"
    Un método para organizar prompts complejos:[^21]

    | Elemento | Significado | Ejemplo |
    |----------|------------|---------|
    | **C** - Context | Contexto de fondo | "Estoy escribiendo un ensayo sobre política fiscal en México" |
    | **O** - Objective | Qué quieres lograr | "Necesito un análisis de los argumentos a favor y en contra del aumento al salario mínimo" |
    | **S** - Style | Estilo de escritura | "En un tono académico pero accesible" |
    | **T** - Tone | Tono emocional | "Objetivo y balanceado, presentando ambos lados" |
    | **A** - Audience | Para quién es | "Estudiantes universitarios" |
    | **R** - Response format | Formato deseado | "Introducción, 3 argumentos a favor, 3 en contra, conclusión. Máximo 800 palabras" |

### Del *prompt engineering* al *context engineering*

En junio 2025, Andrej Karpathy (ex-OpenAI, ex-Tesla AI) acuñó el término *"context engineering"* para describir la evolución: ya no se trata solo de escribir un buen prompt, sino de diseñar todo el contexto que alimenta al modelo, que pueden ser documentos de referencia, ejemplos, instrucciones de sistema, herramientas disponibles y memoria de conversaciones anteriores.[^19]

!!! info "¿Es una habilidad real o hype?"
    "Prompt engineering" como título de empleo está perdiendo fuerza: se está convirtiendo en una habilidad integrada dentro de otros roles, no en una carrera independiente. Pero la capacidad de comunicarse efectivamente con sistemas de IA es una habilidad duradera. Lo que cambia son las herramientas, lo que permanece es el pensamiento crítico detrás.

## IA agéntica: de la implementación a la orquestación

### Tres niveles de sofisticación

No toda la IA es igual. La evolución va de herramientas que responden a herramientas que actúan:[^2]

| Nivel | Qué hace | Ejemplo |
|-------|---------|---------|
| **IA Generativa** | Aprende de datos y produce contenido nuevo | ChatGPT respondiendo una pregunta |
| **Agentes de IA** | Logran un objetivo singular, automatizan flujos completos | Un asistente que busca en internet, ejecuta código y genera un reporte |
| **IA Agéntica** | Se adapta en tiempo real; agentes autónomos colaboran entre sí | Múltiples agentes coordinándose: uno busca datos, otro los limpia, otro analiza y otro redacta, todo con una sola instrucción |

La diferencia crítica: los agentes de IA agéntica no siguen simplemente reglas preprogramadas, pueden **razonar, planear y actuar** con mínima intervención humana.[^2]

### Cómo funcionan los agentes por dentro

Un agente de IA es un sistema con varios componentes que trabajan juntos:[^26]

| Componente       | Qué hace                                                  | Analogía                |
| ---------------- | --------------------------------------------------------- | ----------------------- |
| **Modelo (LLM)** | El "cerebro" que genera texto                             | El pensamiento          |
| **Memoria**      | Almacena contexto de conversaciones anteriores            | La libreta de notas     |
| **Herramientas** | APIs, buscadores, bases de datos que el agente puede usar | Las manos               |
| **Orquestación** | Coordina tareas y colaboración entre agentes              | El director de orquesta |
El ciclo básico es: el agente recibe una tarea, la divide en pasos, decide qué herramientas necesita, ejecuta cada paso, y evalúa el resultado para ajustar si es necesario.[^26]

### Protocolos emergentes

Dos estándares abiertos están definiendo cómo los agentes se conectan con el mundo:[^2]

- **MCP (Model Context Protocol):** Un estándar abierto para la integración entre modelos de IA y herramientas externas, como bases de datos, APIs, sistemas. Funciona como un "conector universal" (el USB de la IA) que permite acceder a datos en tiempo real y ejecutar acciones en sistemas externos.
- **A2A (Agent-to-Agent Protocol):** Protocolo para que los agentes se comuniquen entre sí, permitiendo colaboración multi-agente entre plataformas diferentes.

### Frameworks para construir agentes

Hoy existen varios frameworks open source que permiten construir agentes sin partir de cero:[^26]

| Framework | Empresa | Mejor para | Open source |
|-----------|---------|-----------|-------------|
| **CrewAI** | CrewAI | Equipos de agentes con roles definidos (investigador, redactor, analista) | Sí |
| **LangGraph** | LangChain | Flujos complejos con loops y decisiones condicionales | Sí |
| **AutoGen** | Microsoft | Orquestación empresarial y colaboración multi-agente | Sí |
| **OpenAI Agents SDK** | OpenAI | Prototipos rápidos con "handoffs" entre agentes | Sí |
| **Google ADK** | Google | Agentes modulares con integración a múltiples LLMs | Sí |

No necesitas dominar todos. Lo importante es saber que existen y que construir un agente ya no requiere miles de líneas de código. Si te interesa experimentar, CrewAI y Google ADK son los más accesibles para empezar.
### El ecosistema: modelos open source vs. propietarios

Los agentes necesitan un modelo base. Hoy hay dos caminos:

| Modelo | Empresa | ¿Open source? | Parámetros |
|--------|---------|--------------|-----------|
| GPT-4o / GPT-4.5 | OpenAI | No | No publicados |
| Claude 3.5 / Claude 4 | Anthropic | No | No publicados |
| Gemini 2.0 | Google | No | No publicados |
| **Llama 3.1 / 3.2** | Meta | Semi-open | 8B-405B |
| **Mistral** | Mistral AI (Francia) | Sí | 7B-8x22B |
| **DeepSeek R1** | DeepSeek (China) | Sí | 671B (MoE) |
| **Qwen 2.5** | Alibaba (China) | Sí | 0.5B-72B |
| **Phi-3 / Phi-4** | Microsoft | Sí | 3.8B-14B |
| **Gemma 2** | Google | Sí | 2B-27B |

**¿Por qué importa el open source para América Latina?**

1. **Soberanía de datos:** Los modelos propietarios envían tus datos a servidores de empresas extranjeras. Los modelos locales los procesan en tu propia máquina
2. **Costo:** Un modelo open source se ejecuta gratis (solo necesitas hardware)
3. **Personalización:** Ajustar modelos para español y contexto latinoamericano
4. **Transparencia:** Auditar sesgos, entender limitaciones
5. **Independencia:** No depender de decisiones empresariales de Silicon Valley

Solo ~4% de los datos de entrenamiento de los principales modelos de lenguaje están en español.[^13] Los contextos económicos, políticos y culturales de América Latina están subrepresentados en los modelos dominantes.

??? example "Caso: DeepSeek — China sacude a Silicon Valley"
    En enero 2025, DeepSeek lanzó R1, un modelo de razonamiento que rivaliza con GPT-4 pero fue entrenado por **menos de $6 millones**, una fracción del costo de modelos occidentales. NVIDIA perdió $600,000 millones en capitalización de mercado en un solo día. El caso demostró que la IA de frontera no requiere necesariamente miles de millones en inversión y que la concentración geopolítica de la IA puede cuestionarse.

??? example "Caso: Latam-GPT — soberanía digital desde Chile"
    En enero 2026, Chile lanzó **Latam-GPT**, el primer modelo de lenguaje grande diseñado específicamente para contextos latinoamericanos. Es posible gracias al ecosistema open source: construir sobre modelos base abiertos (Llama, Mistral) y adaptarlos al contexto regional. Sin el open source, Latam-GPT no existiría.

!!! info "El debate del *open washing*"
    No todo lo que se llama "open source" lo es. La licencia de Llama de Meta prohíbe el uso comercial para empresas con más de 700 millones de usuarios mensuales. El término correcto sería *"open weights"* (pesos abiertos).

??? tip "Herramientas para ejecutar modelos localmente"
    | Herramienta | Qué hace | Requisitos |
    |-------------|---------|-----------|
    | **Ollama** | Ejecuta modelos como Llama, Mistral, Phi con un solo comando | Mac/Linux/Windows, 8GB+ RAM |
    | **LM Studio** | Interfaz gráfica para descargar y usar modelos localmente | Mac/Linux/Windows, 8GB+ RAM |
    | **Hugging Face** | Plataforma con 2M+ modelos y 500,000+ datasets | Navegador web para explorar; GPU para modelos grandes |

## Copiloto, no piloto automático

La IA agéntica promete mucho, pero más autonomía no es sinónimo de mejor resultado. La metáfora correcta no es un piloto automático que te reemplaza, sino un copiloto que te asiste: tú sigues volando el avión.

### Los riesgos concretos

1. **Propagación de alucinaciones:** Si un agente alucina en el paso 2, los pasos 3-6 están contaminados
2. **Pérdida de supervisión:** Más autonomía = menos control humano
3. **Seguridad:** Agentes con acceso a internet pueden ejecutar acciones dañinas sin autorización
4. **Costo:** Consumen muchos más tokens (y energía) que un chatbot simple
5. **Comportamiento autónomo excesivo:** Los modelos de frontera a veces toman acciones riesgosas sin pedir permiso[^1]

### Transparencia radical: el caso del Sabotage Risk Report

En 2025, Anthropic publicó un documento de 52 páginas analizando públicamente los riesgos de que su propia IA actúe de forma autónoma y dañina.[^1] Es un ejercicio sin precedentes de transparencia corporativa en la industria.

??? example "Los 8 caminos hacia el daño catastrófico"
    | Camino | Qué podría pasar |
    |--------|-----------------|
    | 1. *Sandbagging* difuso | El modelo rinde deliberadamente por debajo de su capacidad en tareas de seguridad |
    | 2. Sabotaje dirigido a I+D | Insertar bugs en código de investigación de seguridad |
    | 3. Puertas traseras en código | Insertar vulnerabilidades para modelos futuros |
    | 4. Envenenar datos de entrenamiento | Modificar datos para que futuros modelos hereden objetivos desalineados |
    | 5. Auto-exfiltración | Copiar sus propios pesos a un servidor externo |
    | 6. Despliegue persistente no autorizado | Lanzar una instancia de sí mismo con menos restricciones |
    | 7. Sabotaje en otros laboratorios | Usar acceso en otras organizaciones para sabotear su investigación |
    | 8. Sabotaje de decisiones gubernamentales | Influir en políticas de forma sutil |

    La conclusión de Anthropic: el riesgo es "muy bajo pero no despreciable." **Cada uno de los 8 caminos se mitiga con supervisión humana.**[^1]

La pregunta que esto plantea es directa: si Anthropic publica estos riesgos sobre su propia IA, ¿por qué otras empresas no publican reportes equivalentes?

### Privacidad: ¿qué pasa con tu información?

Parte de ser copiloto, no piloto automático, es saber qué ocurre con los datos que compartes:[^17]

| Característica | ChatGPT (OpenAI) | Claude (Anthropic) | Gemini (Google) |
|---------------|------------------|-------------------|--------------------|
| ¿Entrena con tus datos por defecto? | Sí (tier gratuito) | **No** | Sí |
| ¿Opt-out disponible? | Sí (en configuración) | N/A (opt-in por defecto) | Sí (controles de actividad) |
| Retención de datos | Indefinida (salvo que borres) | Hasta 5 años posible | 18 meses (ajustable) |
| ¿Revisión humana? | Sí (limitada) | Solo por violaciones de seguridad | Sí (sin identificadores) |

!!! warning "Reglas básicas de privacidad"
    Para cualquier herramienta de IA:

    - **Nunca** compartas contraseñas, datos personales o información confidencial
    - **Nunca** subas documentos con datos sensibles de terceros
    - En ChatGPT gratuito, tus conversaciones **se usan para entrenar el modelo** a menos que lo desactives manualmente[^17]

### El costo ambiental de cada consulta

Cada interacción con IA tiene un costo energético real (ver [Módulo 3: Impactos ambientales](03-impactos-ambientales.md)):

| Tipo de consulta | Energía aproximada | Contexto |
|------------------|-------------------|----------|
| Búsqueda de Google | ~0.03 Wh | Línea base |
| Consulta de texto a ChatGPT | ~0.34 Wh | 10x una búsqueda de Google |
| Generación de imagen | ~2.91 Wh | 97x una búsqueda de Google |
| Razonamiento avanzado (DeepSeek R1, o1) | >33 Wh por prompt largo | 1,100x una búsqueda de Google |

Usar IA con intención, no por inercia, también es una forma de responsabilidad.

## Reclaiming the Human Element

La IA no reduce la necesidad de pensamiento humano: la aumenta. En un mundo donde generar texto, imágenes y código es trivial, lo que se vuelve valioso es precisamente lo que la IA no puede hacer: juzgar, contextualizar, asumir responsabilidad, y conectar el conocimiento con un propósito.

### Integridad académica

| Uso | ¿Aceptable? |
|-----|-----------|
| Usar IA para entender conceptos | Sí |
| Usar IA para generar ideas y luego desarrollarlas tú | Sí |
| Usar IA para revisar gramática y estilo | Sí |
| Pedirle feedback sobre tu escritura | Sí |
| Generar un primer borrador y luego editarlo sustancialmente | Depende del contexto / preguntar al profesor |
| Copiar y pegar respuestas de IA como trabajo propio | **No** |
| Usar IA sin entender lo que generó | **No** |
| Presentar citas de IA sin verificarlas | **No** |

**Cómo citar contenido generado por IA (APA 7a edición):**[^8]

```
Autor de la herramienta. (Año). Nombre de la herramienta (Versión) [Large language model]. URL

Ejemplo:
OpenAI. (2025). ChatGPT (versión Feb 13) [Large language model]. https://chat.openai.com
```

!!! info "Tendencias en universidades"
    Las universidades están pasando de prohibiciones generales a reglas matizadas por curso. En México, ANUIES estableció un comité para el uso ético de IA, y varias instituciones ya tienen marcos de uso responsable. La tendencia global es: autonomía del profesor para definir políticas de IA por materia, y declaraciones obligatorias de uso de IA en tareas.

### Encontrar tu propósito en medio del ruido

Los cambios tecnológicos profundos, como los políticos, casi siempre se sienten ambiguos e inciertos en el momento. Solo se aclaran en retrospectiva. La claridad no viene de consumir más contenido sobre IA, sino de identificar problemas que conecten con tu propio sentido de propósito y convicción, y de explorar las herramientas disponibles para resolverlos.[^27]

??? tip "Recursos para seguir aprendiendo"
    **Cursos gratuitos:**

    - [Elements of AI](https://www.elementsofai.com) — Fundamentos conceptuales (Universidad de Helsinki)
    - [AI for Everyone](https://www.coursera.org/learn/ai-for-everyone) — Andrew Ng, Coursera
    - [Prompt Engineering Guide](https://www.promptingguide.ai) — Técnicas de prompting[^21]
    - [Google Generative AI Learning Path](https://www.skills.google/) — Módulos de Google
    - [Cursos de Hugging Face](https://huggingface.co) — NLP y ML open source

    **Herramientas para experimentar:**

    - [Ollama](https://ollama.com) — Ejecuta modelos open source en tu computadora
    - [NotebookLM](https://notebooklm.google.com/) — Análisis de documentos con IA (Google, gratis)
    - [Anthropic Courses](https://anthropic.skilljar.com/) — Cursos de Anthropic
    - [Google Agent Development Kit (ADK)](https://google.github.io/adk-docs/) — Framework open source para construir agentes de IA (Python, JS, Go, Java)

    **Lecturas recomendadas:**

    - [UNESCO AI Competency Framework](https://www.unesco.org/en/articles/ai-competency-framework-students) — Marco de competencias para estudiantes[^7]
    - [Anthropic Economic Index](https://www.anthropic.com/economic-index) — Datos empíricos sobre IA y trabajo
    - [OCDE-CE AI Literacy Framework](https://ailiteracyframework.org) — Marco de alfabetización en IA[^22]

    **Herramientas prácticas de IA:**

    | Categoría | Herramienta | Mejor uso |
    |-----------|-------------|-----------|
    | **Texto y análisis** | ChatGPT (OpenAI) | Lluvia de ideas, explicaciones, análisis rápido |
    | | Claude (Anthropic) | Análisis de documentos largos, codificación, redacción |
    | | Gemini (Google) | Tareas multimodales, integración con Google Docs |
    | **Investigación** | Perplexity | Búsqueda con fuentes citadas |
    | | Consensus | Consenso científico sobre un tema |
    | | Elicit | Revisiones de literatura académica |
    | **Documentos y datos** | NotebookLM (Google) | Analizar papers, crear resúmenes. Gratis, 1M tokens |
    | | ChatGPT Code Interpreter | Subir CSV, generar gráficas, análisis estadístico |
    | | Julius AI | Análisis de datos sin programar |
    | | Python + pandas | Lenguaje más usado en IA y ciencia de datos (gratis) |
    | | R | Análisis estadístico, muy usado en ciencias sociales (gratis) |

??? abstract "Glosario de conceptos clave"
    | Concepto | Definición breve |
    |----------|-----------------|
    | Prompt | Instrucción o pregunta que le das a un modelo de IA. La calidad de la respuesta depende directamente de la calidad del prompt |
    | Alucinación | Cuando un modelo genera información convincente pero factualmente incorrecta. No es un error ocasional, es una característica inherente del funcionamiento estadístico de los LLMs |
    | Sicofancia | Tendencia de los modelos a estar de acuerdo con el usuario en lugar de desafiarlo, incluso cuando el usuario está equivocado |
    | Deepfake | Contenido audiovisual (imagen, audio, video) generado o manipulado por IA para parecer real. El 96% de los deepfakes más populares contienen pornografía |
    | Método SIFT | Framework de verificación de información: Stop (para), Investigate (investiga la fuente), Find better coverage (busca mejores fuentes), Trace to original (rastrea al original) |
    | Marco de las 4D | Framework de Anthropic para fluidez en IA: Delegación (si usar IA), Descripción (cómo pedirle), Discernimiento (evaluar resultados), Diligencia (asumir responsabilidad) |
    | Human-in-the-loop (HITL) | Principio de diseño que mantiene a un ser humano en puntos críticos de decisión de un sistema de IA. Exigido por la Ley de IA de la UE para sistemas de alto riesgo |
    | Context engineering | Evolución del prompt engineering: diseñar todo el contexto que alimenta al modelo (documentos, ejemplos, instrucciones de sistema, herramientas, memoria), no solo la pregunta |
    | IA agéntica | Sistemas de IA que actúan de forma autónoma para lograr objetivos, ejecutando múltiples acciones en secuencia, con capacidad de razonar, planear y adaptarse |
    | MCP (Model Context Protocol) | Estándar abierto para conectar modelos de IA con herramientas externas (bases de datos, APIs, sistemas). Funciona como un "conector universal" |
    | A2A (Agent-to-Agent Protocol) | Protocolo para que agentes de IA se comuniquen entre sí, permitiendo colaboración multi-agente entre plataformas diferentes |
    | Framework | Estructura de software prediseñada que facilita la construcción de aplicaciones. En el contexto de IA agéntica: herramientas como CrewAI o LangGraph que simplifican la creación de agentes |
    | Open source | Software cuyo código fuente es público y puede ser usado, modificado y distribuido libremente. En IA: modelos cuyos pesos y arquitectura están disponibles |
    | Open weights | Término más preciso que "open source" para modelos como Llama de Meta, que publican los pesos del modelo pero restringen ciertos usos comerciales |
    | Orquestación | Coordinación automatizada de múltiples agentes o componentes de IA para completar tareas complejas. El "director de orquesta" de un sistema multi-agente |
    | Vishing | Fraude por voz usando deepfakes de audio para suplantar la identidad de una persona. Los ataques crecieron 1,600% en 2025 |

## Referencias

[^1]: Anthropic (2025). "Sabotage Risk Report: Claude Opus 4.6." Reporte de seguridad. <https://www-cdn.anthropic.com/f21d93f21602ead5cdbecb8c8e1c765759d9e232.pdf>
[^2]: AWS Marketplace (2025). "Agentic AI on the Rise." eBook. <https://pages.awscloud.com/rs/112-TZM-766/images/AWSMP_eBook_Agentic_AI_g9zm.pdf>
[^3]: IDC (2025). "Agentic Evolution of Enterprise Applications." Proyección de mercado.
[^4]: Fortune Business Insights (2025). "Agentic AI Market." Análisis de mercado.
[^5]: OCDE. "AI Principles." Marco ético. <https://oecd.ai/en/ai-principles>
[^6]: UNESCO. "AI Ethics Recommendation." Marco ético. <https://www.unesco.org/en/artificial-intelligence/recommendation-ethics>
[^7]: UNESCO (2024). "AI Competency Framework for Students." Marco educativo. <https://www.unesco.org/en/articles/ai-competency-framework-students>
[^8]: APA Style. "Citing Generative AI." Guía académica. <https://apastyle.apa.org/blog/cite-generative-ai-references>
[^9]: Economics Network (2025). Estudio sobre uso de IA generativa en educación superior.
[^10]: WEF (2025). "The Future of Jobs Report 2025." Reporte. <https://www.weforum.org/publications/the-future-of-jobs-report-2025/>
[^11]: Google/Ipsos (2025). Encuesta sobre adopción de IA en México.
[^12]: LinkedIn (2025). Datos sobre demanda de habilidades de IA en México.
[^13]: Access Partnership (2025). Análisis sobre español en datos de entrenamiento de LLMs.
[^14]: DeepStrike (2025). "Deepfake Statistics 2025." <https://deepstrike.io/blog/deepfake-statistics-2025>
[^15]: Eftsure (2025). "Deepfake Gender Impact." Análisis.
[^16]: Europol (2025). Proyección sobre contenido sintético.
[^17]: CyberNews (2025). "AI Privacy Comparison 2025." <https://cybernews.com/ai-tools/ai-assistants-privacy-and-security-comparisons/>
[^18]: Mike Caulfield / UChicago. "Método SIFT." <https://guides.lib.uchicago.edu/c.php?g=1241077&p=9082322>
[^19]: Andrej Karpathy (2025). "Context Engineering." Concepto técnico.
[^20]: Keepnet Labs (2025). "Fraude con IA." Estadísticas.
[^21]: Prompt Engineering Guide. <https://www.promptingguide.ai>
[^22]: OCDE-CE. "AI Literacy Framework." <https://ailiteracyframework.org>
[^23]: Unión Europea (2024). "Artificial Intelligence Act" (Reg. 2024/1689). Legislación. <https://eur-lex.europa.eu/eli/reg/2024/1689>
[^24]: IEA / The Electric Power Research Institute (2024). Estimaciones de consumo energético por consulta de IA.
[^25]: Bender & Gebru (2021). "On the Dangers of Stochastic Parrots." <https://dl.acm.org/doi/10.1145/3442188.3445922>
[^26]: DataCamp (2025). "AI Agent Frameworks: Tools for Smarter Systems." Blog. <https://www.datacamp.com/blog/ai-agent-frameworks>
[^27]: Revzin, S. & Revzin, V. (2026). "How To Separate Artificial Intelligence Signal From Noise." Forbes. <https://www.forbes.com/sites/sergeirevzin/2026/01/07/how-to-separate-artificial-intelligence-signal-from-noise/>
[^28]: Dakan, R. & Feller, J. (2025). "AI Fluency Framework." Anthropic / Ringling College / University College Cork. CC BY-NC-ND 4.0. <https://aifluencyframework.org/>
