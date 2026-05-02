const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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
    date: 'Tuesday, Aug. 11',
    time: 'Primary activation window to be confirmed',
    theme: 'Traditional MDYD Festivities Plus',
    image: 'Carnival Inflatable.jpeg',
    address: 'Belle Isle Park, Detroit, MI — exact event entrance and field location to be confirmed',
    activities: ['Carnival-style games and inflatables', 'Outdoor youth activities', 'Main-stage entertainment moments', 'Partner resource booths', 'Youth play and wellness zones'],
    schedule: ['Arrival and group check-in', 'Opening welcome and safety notes', 'Rotating activity blocks', 'Lunch / hydration break', 'Main-stage entertainment and closing send-off'],
    directions: 'Access from major roadways via the MacArthur Bridge; final gate, bus route and drop-off instructions will be added after partner approval.',
    parking: 'Bus staging, volunteer parking and family parking will be assigned in the final site plan.',
    siteMap: 'A downloadable Belle Isle site map will be placed here with entrances, activity zones, restrooms, hydration and first-aid markers.',
    amenities: sharedAmenities
  },
  {
    name: 'Eastern Market',
    date: 'Tuesday, Aug. 11',
    time: 'Primary activation window to be confirmed',
    theme: 'Tuesday Market',
    image: 'Kids Painting.jpg',
    address: 'Eastern Market District, Detroit, MI — exact shed / activation footprint to be confirmed',
    activities: ['Creative arts stations', 'Market exploration activities', 'Youth engagement tables', 'Community partner demonstrations', 'Food and culture moments'],
    schedule: ['Group arrival and check-in', 'Market orientation', 'Arts and partner rotations', 'Performance / engagement break', 'Departure and pickup window'],
    directions: 'Downtown Detroit access via I-75 and local Eastern Market streets; final bus and family drop-off route will be added.',
    parking: 'Parking assignments are pending final shed selection and partner traffic plan.',
    siteMap: 'A market-zone map will be added with check-in, activity tables, restroom locations and emergency meeting point.',
    amenities: sharedAmenities
  },
  {
    name: 'Joe Louis Greenway',
    date: 'Wednesday, Aug. 12',
    time: 'Primary activation window to be confirmed',
    theme: 'Youth Yoga Fitness',
    image: 'Dancers.jpg',
    address: 'Joe Louis Greenway, Detroit, MI — exact trailhead / activity zone to be confirmed',
    activities: ['Youth yoga', 'Fitness drills', 'Movement and wellness stations', 'Mentorship touchpoints', 'Outdoor group activities'],
    schedule: ['Check-in and warm-up', 'Yoga / movement session', 'Fitness station rotations', 'Wellness activity break', 'Group closeout'],
    directions: 'Route guidance from major roadways and neighborhood access points will be added once the exact trailhead is confirmed.',
    parking: 'Parking and bus drop-off will be coordinated with the final greenway access point.',
    siteMap: 'Site map will show trailhead, activity stations, shaded areas, hydration, first-aid and pickup zone.',
    amenities: sharedAmenities
  },
  {
    name: 'BGCGD',
    date: 'Thursday, Aug. 13',
    time: 'Primary activation window to be confirmed',
    theme: 'BGCGD Clubs Open House + VIP Reception',
    image: 'Registration.jpeg',
    address: 'Boys & Girls Clubs of Greater Detroit — exact club location / reception site to be confirmed',
    activities: ['Club tours and open house', 'Registration support', 'Family information tables', 'VIP reception', 'Youth and partner networking'],
    schedule: ['Open house check-in', 'Guided club tours', 'Program showcase', 'VIP reception window', 'Closing remarks'],
    directions: 'Directions will be provided from major roadways once the final club location is approved.',
    parking: 'Guest, VIP and volunteer parking plan will be added with the final venue details.',
    siteMap: 'A building/site map will identify entrance, reception area, tour route, restrooms and accessibility notes.',
    amenities: ['Indoor check-in', 'Restrooms', 'Staff and volunteer support', 'Information tables', 'Accessibility guidance', 'Reception area']
  },
  {
    name: 'City of Detroit',
    date: 'Friday, Aug. 14',
    time: 'Primary activation window to be confirmed',
    theme: 'Occupy the Summer: Carnival + Girls Flag Football Game',
    image: 'Flag Football Trophy.jpeg',
    address: 'City of Detroit activation site — exact park / field address to be confirmed',
    activities: ['Carnival activation', 'Girls flag football game', 'Team recognition', 'Youth games and competitions', 'Community celebration'],
    schedule: ['Team / group arrival', 'Carnival and activity opening', 'Girls flag football game', 'Awards / recognition moment', 'Final pickup and departure'],
    directions: 'Directions from major roadways will be published after the final park or field is confirmed.',
    parking: 'Parking, team drop-off and equipment unloading zones will be included in the final site logistics.',
    siteMap: 'Field map will show game field, spectator area, carnival footprint, check-in, hydration and restrooms.',
    amenities: sharedAmenities
  },
  {
    name: 'Michigan Central',
    date: 'Friday, Aug. 14',
    time: 'Primary activation window to be confirmed',
    theme: 'Drone Demo Day',
    image: 'Robotics.jpg',
    address: 'Michigan Central District, Detroit, MI — exact demo zone to be confirmed',
    activities: ['Drone demonstrations', 'STEM discovery stations', 'Robotics and innovation showcase', 'Career exploration moments', 'Hands-on learning opportunities'],
    schedule: ['Check-in and welcome', 'Drone demo block', 'STEM station rotations', 'Career / mentor conversation', 'Closing demonstration'],
    directions: 'Final access instructions will include bus routes, pedestrian entry and demo-zone restrictions if required.',
    parking: 'Parking and bus staging details will be set with Michigan Central logistics.',
    siteMap: 'Innovation-zone map will mark demo area, safety perimeter, check-in, restrooms and partner tables.',
    amenities: ['STEM demo zone', 'Safety perimeter signage', 'Restrooms', 'Hydration', 'Staff support', 'Partner tables']
  },
  {
    name: 'Joe Louis Greenway',
    date: 'Friday, Aug. 14',
    time: 'Primary activation window to be confirmed',
    theme: 'Summer Celebration',
    image: 'Flag Football .jpeg',
    address: 'Joe Louis Greenway, Detroit, MI — exact celebration zone to be confirmed',
    activities: ['Summer celebration', 'Sports activities', 'Outdoor engagement games', 'Music and community moments', 'Partner booths'],
    schedule: ['Arrival and welcome', 'Open activity rotations', 'Sports / movement block', 'Celebration moment', 'Departure and pickup'],
    directions: 'Final roadway and access guidance will be added after the activation footprint is locked.',
    parking: 'Parking and staging plan will align with the final greenway celebration zone.',
    siteMap: 'Map will include check-in, sports areas, partner booths, stage / music, hydration and restrooms.',
    amenities: sharedAmenities
  },
  {
    name: 'Detroit Riverfront',
    date: 'Saturday, Aug. 15',
    time: 'Primary activation window to be confirmed',
    theme: 'Detroit Youth Sports Showcase in partnership with Project Play',
    image: 'College Row.jpg',
    address: 'Detroit Riverfront, Detroit, MI — exact riverfront site to be confirmed',
    activities: ['Detroit Youth Sports Showcase', 'Project Play partnership activations', 'Family-friendly activities', 'College / career partner tables', 'Closing celebration energy'],
    schedule: ['Check-in and site welcome', 'Sports showcase rotations', 'Partner activation time', 'Recognition / closing moment', 'Final pickup and departure'],
    directions: 'Riverfront access instructions from major roadways, nearby parking and bus drop-off will be added.',
    parking: 'Parking options and bus staging will be coordinated with Riverfront operations.',
    siteMap: 'Riverfront map will show showcase zones, partner tables, restrooms, hydration, first aid and pickup.',
    amenities: sharedAmenities
  }
];

const grid = document.getElementById('locationGrid');
const modal = document.getElementById('locationModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function detailsPanel(item) {
  const rows = [
    ['Date', item.date],
    ['Time', item.time],
    ['Address', item.address],
    ['Theme', item.theme],
    ['Directions', item.directions],
    ['Parking', item.parking],
    ['Site Map', item.siteMap],
    ['Partner / Location', `${item.name} partner details and logo can be added here.`]
  ];
  return `<div class="detail-grid">${rows.map(([label, value]) => `<div><strong>${label}</strong>${value}</div>`).join('')}</div>`;
}

function listPanel(title, items) {
  return `<h4>${title}</h4><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function openModal(item) {
  modalContent.innerHTML = `
    <div class="modal-hero"><img src="assets/photos/${item.image}" alt="${item.name} event image"></div>
    <div class="modal-body">
      <img class="modal-logo" src="assets/logos/mdyd-compact-badge-dark.png" alt="MDYD logo">
      <p class="eyebrow">${item.date}</p>
      <h3>${item.name}</h3>
      <p class="lead">${item.theme}</p>
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

  modalContent.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
      modalContent.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('active', btn === button));
      modalContent.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.panel === tab));
    });
  });

  if (typeof modal.showModal === 'function') modal.showModal();
}

if (grid) {
  grid.innerHTML = locations.map((item, index) => `
    <article class="location-card reveal" tabindex="0" role="button" data-index="${index}" aria-label="View ${item.name} details">
      <img class="location-photo" src="assets/photos/${item.image}" alt="${item.name} image">
      <span class="location-badge"><img src="assets/logos/mdyd-compact-badge-dark.png" alt="MDYD badge"></span>
      <div class="location-body">
        <small>${item.date} · ${item.time}</small>
        <h3>${item.name}</h3>
        <p>${item.theme}</p>
        <div class="pill-row"><span class="pill">Details</span><span class="pill">Activities</span><span class="pill">Schedule</span><span class="pill">Amenities</span></div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.location-card').forEach(card => {
    const item = locations[Number(card.dataset.index)];
    card.addEventListener('click', () => openModal(item));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(item);
      }
    });
    observer.observe(card);
  });
}

modalClose?.addEventListener('click', () => modal.close());
modal?.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});
