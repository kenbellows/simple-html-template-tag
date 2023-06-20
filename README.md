# simple-html-template-tag

A simple template literal tag function to convert text into Elements. This relies on the presence of the `document` global object.

## Usage

```js
const makeNamesList = (people) => html`<ul>
  ${people.map(
    (p) => html`<li>${p.firstName} <strong>${p.lastName}</strong></li>`
  )}
</ul>`

document.body.appendChild(`<section>
  <h3>People:</h3>
  ${makeNamesList([
    { firstName: 'Ken', lastName: 'Bellows' },
    { firstName: 'Arnold', lastName: 'Schwarzenegger' },
    { firstName: 'Nero', lastName: 'Caesar' },
    { firstName: 'Rainn', lastName: 'Wilson' }
  ])}
  </h3>
</section>`)
```

Outcome:

<blockquote>
  <section>
    <h3>People:</h3>
    <ul>
      <li>Ken <strong>Bellows</strong></li>
      <li>Arnold <strong>Schwarzenegger</strong></li>
      <li>Nero <strong>Caesar</strong></li>
      <li>Rainn <strong>Wilson</strong></li>
    </ul>
  </section>
</blockquote>
