const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
    });
  });
}

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
revealEls.forEach(el => observer.observe(el));

const sharedAmenities = ['Hydration stations', 'Family-friendly activity zones', 'First-aid / safety support', 'Wayfinding signage'];

const locations = [
  {
    name: 'Belle Isle',
    partner: 'Belle Isle',
    logo: 'assets/logos/partners/belle-isle-conservancy.png',
    date: 'Tuesday, August 11',
    time: '9:00 AM – 3:00 PM',
    theme: 'Traditional MDYD Festivities Plus',
    image: 'Carnival Inflatable.jpeg',
    modalImage: 'College Row.jpg',
    addressLines: ['99 Pleasure Drive', 'Detroit, MI  48207', '(between Fountain and Casino)'],
    description: 'Field games, Youth IDOL competition, technology simulations, career exploration, arts & culture.',
    activities: ['Field games', 'Youth IDOL competition', 'Technology simulations', 'Career exploration', 'Arts & culture'],
    schedule: ['Drop in from 9:00 AM – 3:00 PM to engage in all activities'],
    directions: 'Access via Belle Isle / MacArthur Bridge. Final GPS marker and roadway directions will be inserted when approved.',
    parking: 'Park in surface lot east of Fountain or along road.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  },
  {
    name: 'Eastern Market',
    partner: 'Eastern Market',
    logo: 'assets/logos/partners/eastern-market.png',
    date: 'Tuesday, August 11',
    time: '9:30 AM – 1:45 PM',
    theme: 'Tuesday Market Youth Club (Healthy Eating)',
    image: 'Peace Sign Girls.jpg',
    modalImage: 'Pie-Eating Contest.png',
    addressLines: ['2934 Russell Street', 'Detroit, MI  48207', '(Shed 2)'],
    description: 'Food tasting, cooking demonstrations, Farmers Market exploration + shopping, Zumba, yoga.',
    activities: ['Food tasting', 'Cooking demonstrations', 'Farmers Market exploration + shopping', 'Zumba', 'Yoga'],
    schedule: ['9:30 AM – Arrival and check-in', 'Morning – Market exploration and cooking demonstrations', 'Midday – Food tasting and healthy eating activities', 'Afternoon – Zumba / yoga and closeout', '1:45 PM – Departure'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Eastern+Market+Shed+2+2934+Russell+Street+Detroit+MI+48207" target="_blank" rel="noopener">Eastern Market Shed 2</a>.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  },
  {
    name: 'Boys & Girls Clubs of Greater Detroit',
    partner: 'BGCGD',
    logo: 'assets/logos/partners/bgcgd.png',
    date: 'Wednesday, August 12',
    time: '8:30 AM – 3:30 PM',
    theme: 'BGC Open House Clubs Hop',
    image: 'Registration.jpeg',
    modalImage: 'Registration.jpeg',
    addressLines: ['Dauch / Diehl / Eastpointe /', 'Jackson / Michigan Central', '(Club hop via bus)'],
    description: 'Music studio, culinary kitchen, e-sports, innovation center, industry exploration, games.',
    activities: ['Music studio', 'Culinary kitchen', 'E-sports', 'Innovation center', 'Industry exploration', 'Games'],
    schedule: ['8:30 AM – Arrival and bus coordination', 'Morning – Club hop rotations', 'Midday – Program showcases and lunch / hydration break', 'Afternoon – Industry exploration and games', '3:30 PM – Departure'],
    directions: 'Club-hop route pending.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: ['Indoor check-in', 'Information tables', 'Bus coordination', 'Accessibility guidance']
  },
  {
    name: 'Joe Louis Greenway',
    partner: 'Joe Louis Greenway',
    logo: 'assets/logos/partners/joe-louis-greenway-partnership.png',
    date: 'Wednesday, August 12',
    time: '6:00 PM – 8:15 PM',
    theme: 'Health-Focused Youth Wellness',
    image: 'Dancers.jpg',
    modalImage: 'Dancers.jpg',
    addressLines: ['7241 McDonald Street', 'Detroit, MI  48210', '(Warren Trailhead)'],
    description: 'Guided youth yoga + fitness session, wellness + mindfulness activities, light movement + recovery.',
    activities: ['Guided youth yoga + fitness session', 'Wellness + mindfulness activities', 'Light movement + recovery'],
    schedule: ['6:00 PM – Check-in and welcome', '6:20 PM – Guided youth yoga + fitness session', '7:15 PM – Wellness and mindfulness activities', '7:50 PM – Light movement + recovery', '8:15 PM – Closeout'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Warren+Trailhead+7241+McDonald+Street+Detroit+MI+48210" target="_blank" rel="noopener">Warren Trailhead</a>.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  },
  {
    name: 'Michigan Central',
    partner: 'Michigan Central',
    logo: 'assets/logos/partners/michigan-central.png',
    date: 'Friday, August 14',
    time: '9:00 AM – 2:00 PM',
    theme: 'Drone Demo Day',
    image: 'Robotics.jpg',
    modalImage: 'Robotics.jpg',
    addressLines: ['2050 15th Street', 'Detroit, MI 48216', '(Front Lawn)'],
    description: 'Hands-on flight training, obstacle courses, aerial mapping education, career exploration.',
    activities: ['Hands-on flight training', 'Obstacle courses', 'Aerial mapping education', 'Career exploration'],
    schedule: ['9:00 AM – Arrival and safety briefing', 'Morning – Hands-on flight training and obstacle courses', 'Midday – Aerial mapping education', 'Afternoon – Career exploration', '2:00 PM – Departure'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Newlab+at+Michigan+Central+2050+15th+Street+Detroit+MI+48216" target="_blank" rel="noopener">Newlab @ Michigan Central</a>.',
    parking: 'Parking at Bagley Mobility Hub or street parking around MCS and Newlab.',
    siteMap: 'Site Map provided closer to event.',
    amenities: ['STEM demo zone', 'Safety perimeter signage', 'Hydration', 'Partner tables']
  },
  {
    name: 'Joe Louis Greenway',
    partner: 'Joe Louis Greenway',
    logo: 'assets/logos/partners/joe-louis-greenway-partnership.png',
    date: 'Friday, August 14',
    time: '11:00 AM – 6:00 PM',
    theme: 'Summer Celebration',
    image: 'Flag Football .jpeg',
    modalImage: 'Carnival Inflatable.jpeg',
    addressLines: ['7241 McDonald Street', 'Detroit, MI  48210', '(Warren Trailhead)'],
    description: 'Family-friendly activities, youth-centered programs, community resources, games, music.',
    activities: ['Family-friendly activities', 'Youth-centered programs', 'Community resources', 'Games', 'Music'],
    schedule: ['11:00 AM – Arrival and welcome', 'Afternoon – Open activity rotations and youth-centered programs', 'Community resource and game blocks throughout the day', 'Music and celebration moments', '6:00 PM – Closeout'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Warren+Trailhead+7241+McDonald+Street+Detroit+MI+48210" target="_blank" rel="noopener">Warren Trailhead</a>.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  },
  {
    name: 'City of Detroit',
    partner: 'City of Detroit',
    logo: 'assets/logos/partners/city-of-detroit.png',
    date: 'Friday, August 14',
    time: '5:00 PM – 8:00 PM',
    theme: 'Occupy the Summer Finale: Carnival + Girls Flag Football',
    image: 'Flag Football Trophy.jpeg',
    modalImage: 'Flag Football Trophy.jpeg',
    addressLines: ['Diehl Boys & Girls Club', '4242 Collingwood St', 'Detroit, MI 48204'],
    description: 'Free haircuts, carnival rides, resource vendors, bounce houses, face painting, live performances.',
    activities: ['Free haircuts', 'Carnival rides', 'Resource vendors', 'Bounce houses', 'Face painting', 'Live performances'],
    schedule: ['5:00 PM – Arrival and check-in', '5:15 PM – Carnival games and activities open', '6:00 PM – Flag football / featured programming', '7:30 PM – Recognition moment and performances', '8:00 PM – Departure'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Diehl+Boys+and+Girls+Club+4242+Collingwood+Street+Detroit+MI+48204" target="_blank" rel="noopener">Diehl Boys & Girls Club</a>.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  },
  {
    name: 'Ralph C. Wilson Park',
    partner: 'Detroit Riverfront Conservancy',
    logo: 'assets/logos/partners/detroit-riverfront-conservancy.png',
    date: 'Friday, August 14',
    time: '10:00 AM – 2:00 PM',
    theme: 'Detroit Youth Sports Showcase',
    image: 'College Row.jpg',
    modalImage: 'Flag Football .jpeg',
    addressLines: ['1801 W. Jefferson', 'Detroit, MI  48216'],
    description: 'Sports sampling, robotics, chess, on-site youth sports physicals, literacy, mental health resources.',
    activities: ['Sports sampling', 'Robotics', 'Chess', 'On-site youth sports physicals', 'Literacy', 'Mental health resources'],
    schedule: ['Drop in at any time between 10:00 AM – 2:00 PM to engage in all activities'],
    directions: 'GPS marker: <a href="https://www.google.com/maps/search/?api=1&query=Ralph+C+Wilson+Park+1801+W+Jefferson+Detroit+MI+48216" target="_blank" rel="noopener">Wilson Park</a>.',
    parking: 'Parking info to follow.',
    siteMap: 'Site Map provided closer to event.',
    amenities: sharedAmenities
  }
];

const grid = document.getElementById('locationGrid');
const modal = document.getElementById('locationModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');


function formatAddress(item) {
  if (Array.isArray(item.addressLines)) return item.addressLines.join('<br>');
  return (item.address || '').replace(' — GPS marker to be inserted','').replace(' — GPS markers to be inserted','');
}

function detailsPanel(item) {
  const rows = [
    ['Event Title', item.theme],
    ['Date', item.date],
    ['Time', item.time],
    ['Address', formatAddress(item)],
    ['Description', item.description],
    ['Directions', item.directions],
    ['Parking', item.parking],
    ['Site Map', item.siteMap]
  ];
  return `<div class="detail-grid">${rows.map(([label, value]) => `<div><strong>${label}</strong>${value}</div>`).join('')}</div>`;
}

function listPanel(title, items) {
  return `<h4>${title}</h4><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function openModal(item, defaultTab = 'details') {
  modalContent.innerHTML = `
    <div class="modal-hero"><img src="assets/photos/${item.modalImage || item.image}" alt="${item.name} event image"></div>
    <div class="modal-body">
      <img class="modal-logo" src="${item.logo}" alt="${item.partner} logo">
      <p class="eyebrow"><span>${item.date}</span><span class="eyebrow-time">${item.time}</span></p>
      <h3>${item.name}</h3>
      <p class="lead">${item.theme}</p>
      <p>${item.description}</p>
      <div class="detail-tabs" role="tablist" aria-label="${item.name} details">
        <button class="tab-button active" data-tab="details" role="tab">Details</button>
        <button class="tab-button" data-tab="activities" role="tab">Activities</button>
        <button class="tab-button" data-tab="schedule" role="tab">Schedule</button>
        <button class="tab-button" data-tab="amenities" role="tab">Amenities</button>
      </div>
      <div class="tab-panel active" data-panel="details">${detailsPanel(item)}</div>
      <div class="tab-panel" data-panel="activities">${listPanel('Activities', item.activities)}</div>
      <div class="tab-panel" data-panel="schedule">${listPanel('Schedule', item.schedule)}</div>
      <div class="tab-panel" data-panel="amenities">${listPanel('Amenities', item.amenities)}</div>
    </div>`;

  const activateTab = (tab) => {
    modalContent.querySelectorAll('.tab-button').forEach(btn => {
      const isActive = btn.dataset.tab === tab;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    modalContent.querySelectorAll('.tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === tab);
    });
  };

  modalContent.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => activateTab(button.dataset.tab));
  });

  activateTab(defaultTab);

  if (typeof modal.showModal === 'function') {
    modal.showModal();
    document.body.classList.add('modal-open');
  }
}

if (grid) {
  grid.innerHTML = locations.map((item, index) => `
    <article class="location-card reveal" tabindex="0" role="button" data-index="${index}" aria-label="View ${item.name} details">
      <img class="location-photo" src="assets/photos/${item.image}" alt="${item.name} image">
      <span class="location-badge"><img src="${item.logo}" alt="${item.partner} logo"></span>
      <div class="location-body">
        <small class="card-date"><span>${item.date}</span><span>${item.time}</span></small>
        <h3>${item.name}</h3>
        <p><strong>${item.theme}</strong></p>
        <p>${item.description}</p>
        <p class="card-address">${formatAddress(item)}</p>
        <span class="profile-link">View Full Location Info</span>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.location-card').forEach(card => {
    const item = locations[Number(card.dataset.index)];
    card.addEventListener('click', () => {
      openModal(item, 'details');
    });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(item, 'details');
      }
    });
    observer.observe(card);
  });
}

function closeModal() {
  modal?.close();
  document.body.classList.remove('modal-open');
}

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('close', () => document.body.classList.remove('modal-open'));
modal?.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeModal();
});
