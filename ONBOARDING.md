# Wiki Descifrando la IA — Guía de onboarding

Bienvenida, Aranxa. Esta guía te pone al día para contribuir a la
wiki de Descifrando la IA.

---

## ¿Qué es esta wiki?

Un sitio educativo sobre inteligencia artificial con perspectiva
crítica, feminista y latinoamericana. Está publicado en:

**🔗 [monlo.github.io/descifrando-la-ia](https://monlo.github.io/descifrando-la-ia/)**

**Repo:** [github.com/Monlo/descifrando-la-ia](https://github.com/Monlo/descifrando-la-ia)

La wiki tiene 5 módulos:

| # | Módulo | Archivo | Tema |
|---|--------|---------|------|
| 1 | ¿Qué es la IA? | `docs/01-que-es-la-ia.md` | Conceptos básicos, ML, Deep Learning, LLMs |
| 2 | Sesgos algorítmicos | `docs/02-sesgos-algoritmicos.md` | Sesgos en datos, caja negra, consecuencias |
| 3 | Impactos ambientales | `docs/03-impactos-ambientales.md` | Energía, agua, basura electrónica |
| 4 | Futuro del trabajo | `docs/04-futuro-del-trabajo.md` | Automatización, ghost workers, brecha de género |
| 5 | Herramientas y uso responsable | `docs/05-herramientas-uso-responsable.md` | Marco 4D, prompts, ética |

Más:
- `docs/index.md` — página de inicio
- `docs/como-se-hizo.md` — cómo se produjo el proyecto
- `docs/stylesheets/extra.css` — estilos visuales
- `docs/javascripts/` — scripts (quizzes interactivos, accesibilidad)
- `docs/images/` — imágenes del sitio

---

## Tech stack

| Herramienta | Para qué |
|-------------|----------|
| **MkDocs Material** | Generador de sitios estáticos — convierte `.md` en páginas web |
| **GitHub Pages** | Hosting gratuito — publica el sitio |
| **Markdown** | Formato de los archivos de contenido |
| **Python 3** | Necesario para correr MkDocs localmente |

---

## Setup para empezar

### 1. Fork y clona

```bash
# Fork en GitHub: github.com/Monlo/descifrando-la-ia → botón "Fork"
# Luego clona tu fork:
git clone https://github.com/TU-USUARIO/descifrando-la-ia.git
cd descifrando-la-ia

# Agrega el repo original como upstream
git remote add upstream https://github.com/Monlo/descifrando-la-ia.git
```

### 2. Instala MkDocs

```bash
pip install mkdocs-material
```

### 3. Preview local

```bash
python3 -m mkdocs serve
```

Abre `http://127.0.0.1:8000` en tu navegador. Cada vez que guardes
un archivo `.md`, el sitio se actualiza automáticamente.

**Nota:** Usa `python3 -m mkdocs` (no `mkdocs` solo) — hay un
problema de PATH en algunas instalaciones.

### 4. Deploy (solo Monserrat)

```bash
python3 -m mkdocs gh-deploy
```

Esto publica los cambios en GitHub Pages. Solo Monserrat hace deploy
desde el repo principal.

---

## Cómo editar contenido

### Estructura de un módulo

Cada módulo `.md` tiene esta estructura:

```markdown
# Título del módulo

Introducción con definición clara al inicio.

## Sección 1
Contenido...

## Sección 2
Contenido...

??? abstract "Glosario de conceptos clave"
    | Concepto | Definición |
    |----------|-----------|
    | Término  | Definición breve |

??? tip "Recursos para seguir aprendiendo"
    - Recurso 1
    - Recurso 2

## Referencias
[^1]: Autor (Año). "Título." Tipo. <URL>
```

### Formato markdown que usamos

**Admonitions (cajas de contenido):**
```markdown
!!! info "Título"           ← caja abierta (siempre visible)
    Contenido

??? tip "Título"            ← caja cerrada (clic para abrir)
    Contenido

???+ example "Título"       ← caja abierta por defecto pero cerrable
    Contenido
```

Tipos disponibles: `info` (sky), `tip` (sage), `warning` (peach),
`danger` (rose), `example` (lavender), `abstract` (sand).

**Footnotes (citas):**
```markdown
Texto con una cita.[^1]

## Referencias
[^1]: Autor (Año). "Título." Tipo. <URL>
```

**Tablas:**
```markdown
| Columna 1 | Columna 2 |
|-----------|-----------|
| dato      | dato      |
```

### Reglas de contenido

1. **Español neutro latinoamericano** — no usar vosotros, evitar
   regionalismos extremos
2. **Perspectiva crítica** — la tecnología no es neutral, siempre
   conectar con poder, derechos, justicia
3. **No antropomorfizar la IA** — la IA no "piensa", no "entiende",
   no "aprende" como persona. Es un programa que procesa datos.
4. **Accesible** — explicar conceptos sin simplificar la política
5. **Citas con footnotes** — formato `[^N]`, nunca `[N]` plano

### Reglas para WikiAsistente (RAG-friendly)

El contenido de la wiki también es usado por WikiAsistente (un chat
que responde preguntas usando RAG). Para que las respuestas sean buenas:

1. **Heading con pregunta:** `## ¿Qué es X?` en lugar de `## X`
2. **Primer párrafo autosuficiente:** definición completa en <500 chars
3. **Pregunta en bold al inicio:** `**¿Qué es X?**` en el primer párrafo
4. **Sin imágenes entre heading y definición**
5. **Ejemplos concretos dentro de la definición**
6. **Mecanismo, no solo clasificación:** explicar *cómo* funciona,
   no solo *qué* es

Ver `WikiAsistente/WIKI_MODIFICATIONS.md` para cambios pendientes.

### Glosarios

Cada módulo tiene un glosario al final. Estamos expandiendo las
definiciones de una línea a 2-3 oraciones que incluyan:
definición + mecanismo + ejemplo.

Los glosarios expandidos también servirán como dataset para
fine-tuning del modelo de WikiAsistente.

---

## Diseño visual

La wiki tiene un sistema de diseño documentado en:
`deliverables/Descifrando la IA/Design/DESIGN_GUIDELINES.md`

**Lo esencial:**

| Elemento | Valor |
|----------|-------|
| Fondo | `#FAF8F5` (warm off-white) |
| Texto | `#2C2825` (dark ink) |
| Header | Lavender `#C7BFE0` |
| Headings | Inter (sans-serif) |
| Body | Lora (serif, con fallback Georgia) |
| Code | JetBrains Mono |

**Colores por módulo:**

| Módulo | Color | Hex |
|--------|-------|-----|
| 1. Qué es la IA | Sky | `#A8C8DD` |
| 2. Sesgos | Rose | `#E0B4B7` |
| 3. Medio ambiente | Sage | `#B5CCBA` |
| 4. Futuro del trabajo | Peach | `#F2C4A0` |
| 5. Herramientas | Lavender | `#C7BFE0` |

---

## Flujo de colaboración

```
1. Crea una rama en tu fork:
   git checkout -b docs/expand-glossary-m1

2. Edita los archivos en docs/

3. Preview local:
   python3 -m mkdocs serve

4. Commit y push:
   git add docs/01-que-es-la-ia.md
   git commit -m "docs: expand glossary definitions for module 1"
   git push origin docs/expand-glossary-m1

5. Abre un Pull Request en GitHub

6. Monserrat revisa y hace merge + deploy
```

### Convenciones de commits

```
docs: expand glossary definitions for module 1
docs: add RAG-friendly intro to ML section
fix: correct footnote numbering in module 3
style: update admonition colors for dark mode
```

### Convención de nombres para imágenes

```
{NN}_{PascalCaseName}.png

Ejemplos:
01_JerarquiaIA.png
02_TiposDeSesgo.png
03_ConsumoAgua.png
```

Las imágenes van en `docs/images/`.

---

## Pendientes donde puedes contribuir

- [ ] Expandir glosarios de todos los módulos (ver reglas arriba)
- [ ] Agregar definiciones RAG-friendly a secciones que no las tienen
- [ ] Revisar footnotes — algunos módulos usan formato viejo `[N]`
  en vez de `[^N]`
- [ ] Revisar que no haya antropomorfización en el contenido existente
- [ ] Agregar elementos interactivos (quizzes, checklists) a módulos
  que no los tienen

---

## Contacto

- **Monserrat López** — project owner
- **Wiki:** [monlo.github.io/descifrando-la-ia](https://monlo.github.io/descifrando-la-ia/)
- **WikiAsistente:** [github.com/Monlo/WikiAsistente](https://github.com/Monlo/WikiAsistente)
