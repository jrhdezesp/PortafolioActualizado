import '/less/style.less';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnContactar');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Contacto rápido: jose.rhdezesp@gmail.com');
    });
  }
});

document.getElementById('app').innerHTML = `
  <header>
    <h1>PORTAFOLIO PERSONAL - JOSE RAMON HERNANDEZ ESPINAL</h1>
  </header>

  <main>
    <section class="profile-photo-section">
      <img src="/public/img/202304240801200306613.jpg" alt="Foto Futuro Ing Sistemas" class="profile-photo" />
    </section>

    <section class="contact-info" id="contacto">
      <h2>Información de Contacto</h2>
      <p><span>📞</span> (+504) 3264-2063</p>
      <p><span>📧</span> <a href="mailto:jose.rhdezesp@gmail.com">jose.rhdezesp@gmail.com</a></p>
      <p><span>🏠</span> Brisas de Altamira, al par de Saint John’s Bilingual School, frente a Ferreteria Interrah, Comayagua, Honduras, 12101</p>
      <button id="btnContactar">Mostrar contacto rápido</button>
    </section>

    <section class="awards">
      <h2>Actividades y Premios</h2>
      <ul>
        <li>Excelencia académica con promedio entre 90% y 97%.</li>
        <li>(2016–2017) Primer lugar en Concurso de Español, Cuento Corto.</li>
        <li>(2019–2020) Primer lugar en Feria de Tecnología, Tecnología Aplicada.</li>
        <li>(2021) Puntaje 1334 en PAA, Universidad Autónoma de Honduras.</li>
        <li>Dos años en cursos de dibujo en la "Casa de la Cultura" en Comayagua.</li>
      </ul>
    </section>

    <section class="list-section">
      <h2>Académicos</h2>
      <h3>Educación Preescolar</h3>
      <ul><li>Escuela Bilingüe Honduras (2007–2010)</li></ul>
      <h3>Educación Básica</h3>
      <ul><li>Escuela Bilingüe Honduras (2010–2016)</li></ul>
      <h3>Educación Media</h3>
      <ul>
        <li>Escuela Bilingüe Honduras (2016–2017)</li>
        <li>Saint John’s Bilingual School (2017–2019)</li>
        <li>Escuela Bilingüe Honduras (2019–2021)</li>
      </ul>
      <h3>Educación Universitaria</h3>
      <ul>
        <li>Universidad Nacional Autónoma de Honduras (2021–2023)</li>
        <li>Universidad Católica de Honduras (2023–Presente)</li>
      </ul>
    </section>

    <section class="list-section">
      <h2>Experiencia Laboral</h2>
      <h3>Intérprete Inglés/Español</h3>
      <ul>
        <li><strong>Teleperformance</strong> (2021–2022)</li>
        <li>9 meses, turno completo. Llamadas médicas, bancarias, etc.</li>
      </ul>
      <ul>
        <li><strong>Interpretia – Mego Networks</strong> (2022–2024)</li>
        <li>1 año y 4 meses, turno parcial. Categorías CSI, MSI y VRI.</li>
      </ul>
    </section>

    <section class="list-section">
      <h2>Otros Datos de Interés</h2>
      <ul>
        <li>Microsoft Office, herramientas de diseño y edición de video.</li>
        <li>Lenguajes: C, C++, Python, Java.</li>
        <li>Mantenimiento y reparación de software.</li>
        <li>Disponibilidad de horario.</li>
      </ul>
    </section>
  </main>
`;

