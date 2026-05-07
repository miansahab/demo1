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

const sharedAmenities = ['Hydration stations', 'Restrooms or portable restrooms', 'Staff and volunteer check-in', 'Family-friendly activity zones', 'First-aid / safety support', 'Wayfinding signage'];

const locations = [
  {
    name: 'Belle Isle',
    partner: 'Belle Isle',
    date: 'Tuesday, August 11',
    time: '9:00 AM – 3:00 PM',
    theme: 'Traditional MDYD Festivities Plus',
    image: 'Carnival Inflatable.jpeg',
    address: '99 Pleasure Drive, Detroit 48207 (between Fountain and Casino) — GPS marker to be inserted',
    description: 'Field games, Youth IDOL competition, technology simulations, career exploration, arts & culture.',
    activities: ['Field games', 'Youth IDOL competition', 'Technology simulations', 'Career exploration', 'Arts & culture'],
    schedule: ['9:00 AM – Arrival and check-in', 'Morning – Field games, simulations and activity rotations', 'Midday – Youth IDOL and arts & culture programming', 'Afternoon – Career exploration and closing activities', '3:00 PM – Departure'],
    directions: 'Access via Belle Isle / MacArthur Bridge. Final GPS marker and roadway directions will be inserted when approved.',
    parking: 'Parking details to be confirmed with the final Belle Isle site plan.',
    siteMap: 'Site map to follow with entrance, activity zones, restrooms, hydration and first-aid markers.',
    amenities: sharedAmenities
  },
  {
    name: 'Eastern Market',
    partner: 'Eastern Market',
    date: 'Tuesday, August 11',
    time: '9:30 AM – 1:45 PM',
    theme: 'Tuesday Market Youth Club (Healthy Eating)',
    image: 'Kids Painting.jpg',
    address: '2934 Russell Street, Detroit 48207 (Shed 2) — GPS marker to be inserted',
    description: 'Food tasting, cooking demonstrations, Farmers Market exploration + shopping, Zumba, yoga.',
    activities: ['Food tasting', 'Cooking demonstrations', 'Farmers Market exploration + shopping', 'Zumba', 'Yoga'],
    schedule: ['9:30 AM – Arrival and check-in', 'Morning – Market exploration and cooking demonstrations', 'Midday – Food tasting and healthy eating activities', 'Afternoon – Zumba / yoga and closeout', '1:45 PM – Departure'],
    directions: 'Use Eastern Market district access near Russell Street and Shed 2. Final GPS marker to be inserted.',
    parking: 'Parking and bus drop-off details to be finalized with Eastern Market operations.',
    siteMap: 'Shed 2 site map to follow with activity zones, restrooms, food stations and group meeting points.',
    amenities: sharedAmenities
  },
  {
    name: 'Boys & Girls Clubs of Greater Detroit',
    partner: 'BGCGD',
    date: 'Wednesday, August 12',
    time: '8:30 AM – 3:30 PM',
    theme: 'BGC Open House Clubs Hop',
    image: 'Registration.jpeg',
    address: 'Diehl / Dauch / Eastpointe / Jackson / Michigan Central (club hop via bus) — GPS markers to be inserted',
    description: 'Music studio, culinary kitchen, e-sports, innovation center, industry exploration, games.',
    activities: ['Music studio', 'Culinary kitchen', 'E-sports', 'Innovation center', 'Industry exploration', 'Games'],
    schedule: ['8:30 AM – Arrival and bus coordination', 'Morning – Club hop rotations', 'Midday – Program showcases and lunch / hydration break', 'Afternoon – Industry exploration and games', '3:30 PM – Departure'],
    directions: 'Club-hop route and individual GPS markers to be inserted once bus routing is finalized.',
    parking: 'Parking, bus staging and pickup/drop-off details to follow for each club stop.',
    siteMap: 'Club-hop route map to follow with each stop, check-in points and accessibility details.',
    amenities: ['Indoor check-in', 'Restrooms', 'Staff and volunteer support', 'Information tables', 'Bus coordination', 'Accessibility guidance']
  },
  {
    name: 'Joe Louis Greenway',
    partner: 'Joe Louis Greenway',
    date: 'Wednesday, August 12',
    time: '6:00 PM – 8:15 PM',
    theme: 'Health-Focused Youth Wellness',
    image: 'Dancers.jpg',
    address: '7241 McDonald St. Warren Trailhead Joe Louis Greenway — GPS marker to be inserted',
    description: 'Guided youth yoga + fitness session, wellness + mindfulness activities, light movement + recovery.',
    activities: ['Guided youth yoga + fitness session', 'Wellness + mindfulness activities', 'Light movement + recovery'],
    schedule: ['6:00 PM – Check-in and welcome', '6:20 PM – Guided youth yoga + fitness session', '7:15 PM – Wellness and mindfulness activities', '7:50 PM – Light movement + recovery', '8:15 PM – Closeout'],
    directions: 'Use Warren Trailhead access at 7241 McDonald St. Final GPS marker to be inserted.',
    parking: 'Parking and bus drop-off details to be coordinated with Greenway site operations.',
    siteMap: 'Trailhead map to follow with yoga area, wellness stations, restrooms, hydration and safety points.',
    amenities: sharedAmenities
  },
  {
    name: 'City of Detroit',
    partner: 'City of Detroit',
    date: 'Thursday, August 13',
    time: '10:00 AM – 2:00 PM',
    theme: 'Occupy the Summer: Carnival + Girls Flag Football',
    image: 'Flag Football Trophy.jpeg',
    address: 'Diehl Boys & Girls Club, 4242 Collingwood St, Detroit, MI 48204 — GPS marker to be inserted',
    description: 'Carnival games, flag football competition, marching band.',
    activities: ['Carnival games', 'Flag football competition', 'Marching band'],
    schedule: ['10:00 AM – Arrival and check-in', 'Morning – Carnival games open', 'Midday – Flag football competition', 'Afternoon – Marching band / recognition moment', '2:00 PM – Departure'],
    directions: 'Use Diehl Boys & Girls Club at 4242 Collingwood St. Final GPS marker to be inserted.',
    parking: 'Parking, team drop-off and equipment unloading zones to be finalized.',
    siteMap: 'Site map to follow with field, carnival footprint, check-in, restrooms, hydration and pickup zones.',
    amenities: sharedAmenities
  },
  {
    name: 'Michigan Central Station',
    partner: 'Michigan Central',
    date: 'Friday, August 14',
    time: '9:00 AM – 2:00 PM',
    theme: 'Drone Demo Day',
    image: 'Robotics.jpg',
    address: '2050 15th St, Detroit, MI 48216 (Front Lawn) — GPS marker to be inserted',
    description: 'Hands-on flight training, obstacle courses, aerial mapping education, career exploration.',
    activities: ['Hands-on flight training', 'Obstacle courses', 'Aerial mapping education', 'Career exploration'],
    schedule: ['9:00 AM – Arrival and safety briefing', 'Morning – Hands-on flight training and obstacle courses', 'Midday – Aerial mapping education', 'Afternoon – Career exploration', '2:00 PM – Departure'],
    directions: 'Use Michigan Central Station front lawn at 2050 15th St. Final GPS marker to be inserted.',
    parking: 'Parking and bus staging details to be confirmed with Michigan Central operations.',
    siteMap: 'Front lawn map to follow with demo area, safety perimeter, check-in, restrooms and partner tables.',
    amenities: ['STEM demo zone', 'Safety perimeter signage', 'Restrooms', 'Hydration', 'Staff support', 'Partner tables']
  },
  {
    name: 'Joe Louis Greenway',
    partner: 'Joe Louis Greenway',
    date: 'Friday, August 14',
    time: '11:00 AM – 6:00 PM',
    theme: 'Summer Celebration',
    image: 'Flag Football .jpeg',
    address: '7241 McDonald St. Warren Trailhead Joe Louis Greenway — GPS marker to be inserted',
    description: 'Family-friendly activities, youth-centered programs, community resources, games, music.',
    activities: ['Family-friendly activities', 'Youth-centered programs', 'Community resources', 'Games', 'Music'],
    schedule: ['11:00 AM – Arrival and welcome', 'Afternoon – Open activity rotations and youth-centered programs', 'Community resource and game blocks throughout the day', 'Music and celebration moments', '6:00 PM – Closeout'],
    directions: 'Use Warren Trailhead access at 7241 McDonald St. Final GPS marker to be inserted.',
    parking: 'Parking and bus staging plan to align with the final Greenway activation footprint.',
    siteMap: 'Map to follow with activity areas, community resources, games, music, hydration and restrooms.',
    amenities: sharedAmenities
  },
  {
    name: 'Detroit Riverfront Conservancy',
    partner: 'Detroit Riverfront Conservancy',
    date: 'Saturday, August 15',
    time: '10:00 AM – 2:00 PM',
    theme: 'Youth Sports Showcase',
    image: 'College Row.jpg',
    address: 'Ralph C. Wilson Park, 1801 W. Jefferson, Detroit 48216 — GPS marker to be inserted',
    description: 'Sports, robotics, chess, on-site youth sports physicals, literacy, mental health resources.',
    activities: ['Sports', 'Robotics', 'Chess', 'On-site youth sports physicals', 'Literacy', 'Mental health resources'],
    schedule: ['10:00 AM – Arrival and check-in', 'Morning – Sports showcase rotations', 'Midday – Robotics, chess, literacy and resource stations', 'Afternoon – Youth sports physicals and closing moment', '2:00 PM – Departure'],
    directions: 'Use Ralph C. Wilson Park at 1801 W. Jefferson. Final GPS marker to be inserted.',
    parking: 'Parking options and bus staging details to be coordinated with Riverfront operations.',
    siteMap: 'Riverfront map to follow with sports zones, partner tables, restrooms, hydration, first aid and pickup.',
    amenities: sharedAmenities
  }
];

const grid = document.getElementById('locationGrid');
const modal = document.getElementById('locationModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function detailsPanel(item) {
  const rows = [
    ['Event Title', item.theme],
    ['Date', item.date],
    ['Time', item.time],
    ['Address', item.address],
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
    <div class="modal-hero"><img src="assets/photos/${item.image}" alt="${item.name} event image"></div>
    <div class="modal-body">
      <img class="modal-logo" src="assets/logos/mdyd-compact-badge-dark.png" alt="MDYD logo">
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
      <span class="location-badge"><img src="assets/logos/mdyd-compact-badge-dark.png" alt="MDYD badge"></span>
      <div class="location-body">
        <small class="card-date"><span>${item.date}</span><span>${item.time}</span></small>
        <h3>${item.name}</h3>
        <p><strong>${item.theme}</strong></p>
        <p>${item.description}</p>
        <p class="card-address">${item.address.replace(' — GPS marker to be inserted','').replace(' — GPS markers to be inserted','')}</p>
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
