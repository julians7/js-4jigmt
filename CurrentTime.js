import moment from 'moment';

function CurrentTime() {
  return {
    init: (element) => {
      const el = document.querySelector(element);
      const arrValues = [
        { label: 'Hodiny', element: el.querySelector('.time-hours') },
        { label: 'Minuty', element: el.querySelector('.time-minutes') },
        { label: 'Sekundy', element: el.querySelector('.time-seconds') },
      ];

      function showCurrentTime() {
        if (el) {
          let currentTime = moment();

          arrValues[0].element.innerHTML = renderDigit(
            arrValues[0].label,
            currentTime.format('hh')
          );
          arrValues[1].element.innerHTML = renderDigit(
            arrValues[1].label,
            currentTime.format('mm')
          );
          arrValues[2].element.innerHTML = renderDigit(
            arrValues[2].label,
            currentTime.format('ss')
          );
        }
      }

      function renderDigit(label, value) {
        return `<div class="value">${value}</div><div class="label">${label}</label>`;
      }

      setInterval(() => {
        showCurrentTime();
      }, 1000);
    },
  };
}

export default CurrentTime();
