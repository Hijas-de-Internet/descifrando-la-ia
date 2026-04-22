# Cómo hicimos esta wiki

**Descifrando la IA** es un proyecto de [Hijas de Internet](https://instagram.com/hijasdeinternet) que produce contenido sobre inteligencia artificial en **cuatro formatos complementarios**:

1. **Investigación**. Revisión de fuentes académicas, reportes y artículos para cada tema
2. **Podcast**. Episodios de la serie *Descifrando la IA* del podcast *Hijas de Internet*
3. **Talleres**. Sesiones de alfabetización en IA para estudiantes 
4. **Wiki**. Este sitio, que concentra el contenido de los módulos y sirve como recurso para seguir aprendiendo

Los cuatro formatos comparten la misma base de investigación, pero cada uno tiene su propio lenguaje y audiencia. Producir contenido coherente en cuatro formatos es un reto logístico que, hace unos años, nos hubiese tomado mucho tiempo y manos. Ahí es donde entra la IA como herramienta de producción.

**Todo el proyecto fue producido con asistencia de inteligencia artificial, bajo supervisión humana en cada paso.** En este proyecto, IA es una herramienta, no es la autora. La idea detrás de este proyecto, la decisión editorial, cada fuente y dato incluidos y cada texto publicado fue revisado y aprobado por una persona antes de llegar a ti.

Aquí te explicamos exactamente cómo se usó IA en la producción de este contenido.

---

## La tecnología

Para producir el proyecto se utilizaron las siguientes herramientas:

| Herramienta                 | Qué hace                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Claude** (Anthropic)      | Modelo de lenguaje (LLM) que funciona como motor de búsqueda, recolección de información y redacción asistida            |
| **Claude Code** (Anthropic) | Interfaz de línea de comandos (CLI) que permite a Claude interactuar con archivos, terminal y herramientas externas      |
| **NotebookLM** (Google)     | Herramienta de IA que genera presentaciones borrador a partir del contenido investigado, usada como base de las diapositivas del taller y las ilustraciones de la wiki |
| **Canva**                   | Plataforma de diseño donde se editan manualmente las presentaciones generadas, se extraen las ilustraciones de la wiki y se arman las diapositivas finales del taller  |
| **MkDocs Material**         | Generador de sitios estáticos que convierte archivos Markdown en las páginas web que estás leyendo                       |
| **GitHub Pages**            | Servicio de hosting donde se publica la wiki                                                                             |

!!! info "¿Qué es un LLM?"
    Si no sabes qué es un modelo de lenguaje, consulta el [Módulo 1: ¿Qué es la IA?](01-que-es-la-ia.md) donde lo explicamos a detalle.

---

## El sistema de orquestación

Para este proyecto se desarrolló un **sistema modular** compuesto por 1 agente orquestador y 5 habilidades (*skills*) especializadas que coordinan un pipeline de producción de contenido.

### ¿Qué es un skill? ¿Qué es un agente?

En este contexto:

- Un **skill** es un conjunto de instrucciones especializadas que le dicen a la IA *cómo* hacer una tarea específica, desde qué pasos seguir, qué formato usar, qué reglas respetar. 
- Un **agente** es un coordinador que sabe *cuándo* usar cada skill y en qué orden. El agente no hace todo el trabajo: delega a los skills y coordina el flujo entre ellos.

### Los componentes

| Componente         | Tipo   | Función                                                                                                            |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `descifrando`      | Agente | Orquestador del pipeline completo. Coordina las 4 etapas: investigación, podcast, talleres y wiki                  |
| `read-source`      | Skill  | Ingesta de fuentes: obtiene el contenido de una URL o documento, extrae hallazgos clave y los estructura con citas |
| `edit-podcast`     | Skill  | Edición de guiones del podcast *Hijas de Internet*                                                                 |
| `workshop`         | Skill  | Desarrollo de materiales para los talleres                                                                         |
| `wiki-interactive` | Skill  | Motor de interactividad: genera quizzes, ejercicios prácticos y checklists de autoevaluación                       |
| `publish`          | Skill  | Sanitización y publicación: transforma notas internas en contenido apto para publicación                           |

---

## El pipeline paso a paso

El contenido de esta wiki pasa por un proceso de varias etapas antes de llegar a ti:

```
Fuente (URL/PDF)
    │
    ▼
Ingesta (/read-source)
    │
    ▼
Investigación estructurada
    │
    ├──→ Podcast (independiente)
    │
    └──→ Cascada ──→ Taller + Wiki (borrador)
                          │
                          ▼
                    Sanitización
                          │
                          ▼
                    Revisión humana
                          │
                          ▼
                    Publicación (deploy)
```

### 1. Investigación

El skill `read-source` obtiene el contenido de una fuente (artículo, reporte, paper), extrae los hallazgos más relevantes, como datos cuantitativos, casos de América Latina, definiciones clave, y los presenta en una tabla estructurada con citas en formato académico.

### 2. Selección humana

La investigadora revisa la tabla de hallazgos y **elige cuáles incluir**. La IA no decide qué información entra al contenido final, solo presenta opciones.

### 3. Redacción asistida

Con los hallazgos aprobados, la IA genera un borrador de texto en español con citas. Siempre muestra una vista previa antes de escribir cualquier cosa al archivo.

### 4. Cascada

Los hallazgos aprobados se propagan de la investigación hacia los materiales del taller y la wiki. Cada propagación requiere aprobación explícita.

### 5. Revisión editorial 

Antes de publicar, la IA revisa el contenido con criterios específicos:

- **Claridad**. ¿El texto es comprensible para alguien sin conocimientos previos?
- **Tono**. ¿Es accesible sin ser condescendiente? ¿Es crítico sin ser alarmista?
- **Nivel de audiencia**. ¿El lenguaje es apropiado para la audiencia?
- **Coherencia entre módulos**. ¿Los conceptos se usan de forma consistente en toda la wiki? ¿Las referencias cruzadas entre módulos son correctas?
- **Citas y referencias**. ¿Todas las afirmaciones tienen fuente? ¿Los enlaces funcionan?

La IA señala problemas y propone correcciones, pero no aplica cambios directamente.

### 6. Revisión final del equipo

Las hijas de Internet revisamos todo el contenido antes de cada publicación. Verificamos los datos, ajustamos el tono editorial y la narrativa, redactamos secciones nuevas, decidimos qué correcciones de la IA acepta y cuáles descarta, y retiramos información interna (notas de producción, comentarios de proceso) que no debe llegar a la versión pública. Ningún contenido se publica sin esta revisión.

### 7. Publicación

El sitio se genera con MkDocs y se publica en GitHub Pages.

### 8. Diseño visual: imágenes y diapositivas

El contenido visual sigue un proceso aparte:

1. **Brief de contenido**. Claude Code genera un resumen del módulo con sus puntos clave y los lineamientos de marca del proyecto (paleta de colores, estilo visual, tono), listo para alimentar a la herramienta de presentaciones.
2. **Generación de presentación borrador**. El brief se carga en **NotebookLM** (Google), que genera una presentación estructurada con el contenido del módulo.
3. **Edición manual en Canva**. El equipo adapta la presentación en Canva: ajusta composición, tipografía, colores, reemplaza o crea las ilustraciones, y asegura coherencia con la identidad visual del proyecto.
4. **Integración**. De la presentación editada se extraen las imágenes que ilustran la wiki (exportadas como PNG) y se arman las diapositivas finales que se usan en los talleres.

---

## Dónde intervenimos nosotras

Este es el punto más importante. En **cada paso** del pipeline hay un punto de decisión humana:

| Paso               | ¿Qué hace la IA?                          | ¿Qué decidimos nosotras?                                  |
| ------------------ | ----------------------------------------- | ------------------------------------------------------- |
| Ingesta de fuentes | Extrae, estructura y clasifica hallazgos  | Aprueba la clasificación, selecciona qué hallazgos usar |
| Redacción          | Genera borrador de texto con citas        | Aprueba, edita, redacta de nuevo o rechaza el texto     |
| Cascada            | Propone cambios en taller y wiki          | Aprueba cada propagación individualmente                |
| Interactividad     | Propone quizzes y ejercicios              | Selecciona cuáles incluir, edita el contenido           |
| Diseño visual      | Genera prompts e imágenes base            | Edita, ajusta y decide el diseño final en Canva         |
| Revisión editorial | Revisa claridad, tono, coherencia y citas | Acepta o descarta cada corrección propuesta             |
| Publicación        | Genera el sitio                           | Revisión final antes de publicar                        |

!!! warning "La IA nunca escribe sin permiso"
    En este pipeline, la IA **nunca escribe directamente a un archivo sin aprobación explícita**. El flujo siempre es: la IA muestra una vista previa → espera aprobación → solo entonces escribe. Si la propuesta se rechaza, se descarta.

---
### Limitaciones
Hay cosas que la IA **no puede hacer** en este pipeline:

- **Verificar hechos**. La IA puede citar una fuente, pero no puede confirmar si el dato es correcto. Eso lo hacemos nosotras.
- **Decidir relevancia editorial**. ¿Este dato es importante para la audiencia? ¿Este ejemplo es pertinente para el contexto latinoamericano? Esas decisiones son humanas.
- **Diseñar visualmente**. La IA puede generar imágenes base, pero las decisiones de diseño (composición, accesibilidad, coherencia visual, armado de diapositivas) son humanas y se ejecutan manualmente en Canva.
- **Evaluar impacto pedagógico**. ¿Los estudiantes están aprendiendo? ¿Las actividades funcionan? Eso se mide en los talleres presenciales, no con IA.

---
## Por qué transparentamos esto

Gracias a la integración y orquestación de agentes, pudimos realizar procesos que ya hacíamos antes, pero que nos tomaban más tiempo. Esta wiki, y los productos detrás del proyecto Descifrando la IA, son un ejemplo de cómo, a partir de entender a profundidad cómo funcionan estas herramientas (así como sus alcances y limitaciones), estas tecnologías pueden eliminar barreras y ayudarnos a materializar nuestras ideas y proyectos.

Si bien la incorporación de agentes y herramientas de IA agilizó un proceso que nos hubiera tomado semanas o incluso meses, para nosotras es importante compartir **qué hicimos con el tiempo que se liberó**:

- **Leer a profundidad.** Revisamos y leímos todas las fuentes incluidas en esta guía, no solo los extractos que generó la IA, sino los documentos completos. 
- **Escribir.** Seguimos practicando nuestras habilidades de comunicación y redacción. La IA redacta borradores, pero aprender a escribir con claridad sigue siendo una habilidad nuestra.
- **Aprender tecnologías nuevas.** Nos acercamos a MkDocs, GitHub Pages y al proceso de orquestación de agentes.
- **Hacernos más preguntas.** El tiempo libre nos permitió profundizar, cuestionar y buscar formas nuevas de responder las preguntas que iban surgiendo.

Esperamos que esta guía te sirva de inspiración para crear y seguir aprendiendo.

---

## Diagrama del pipeline

```
       📄 Fuente                                               
    (URL, PDF, reporte)                                         
          │                                                     
          ▼                                                     
    🤖 /read-source ──→ Tabla de hallazgos                      
                               │                                
                               ▼                                
                      👩 Selección humana                        
                         "¿Qué incluimos?"                      
                               │                                
               ┌───────────────┼───────────────┐                
               ▼               ▼               ▼                
        🤖 Podcast       🤖 Wiki/Taller    🤖 Prompt visual     
        (independiente)  (cascada)         (NotebookLM)         
               │               │               │                
               ▼               ▼               ▼                
        👩 Revisión      👩 Revisión      👩 Edición manual      
               │               │            (Canva)             
               ▼               ▼               │                
          Publicado       Publicado        ────┘                
                                                                
    👩 = decisión humana    🤖 = asistencia de IA              

```

---

*Esta página se actualizó por última vez en abril 2026.*
