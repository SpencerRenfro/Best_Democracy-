// prisma/seed.ts
// Run with: npx tsx prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database…');

  // Admin user
  const adminPass = await hash('changeme123!', 12);
  const admin = await prisma.user.upsert({
    where:  { email: 'jesse@bestdemocracy.org' },
    update: {},
    create: {
      name:     'Jesse Kumin',
      email:    'jesse@bestdemocracy.org',
      password: adminPass,
      role:     'ADMIN',
      location: 'Boulder, CO',
      bio:      'Founder of Best Democracy. Photographer, election reform advocate, Boulder, CO.',
    },
  });
  console.log('Admin user:', admin.email);

  // Sample blog post
  await prisma.post.upsert({
    where:  { slug: 'welcome-to-best-democracy' },
    update: {},
    create: {
      title:    'Welcome to Best Democracy',
      slug:     'welcome-to-best-democracy',
      excerpt:  'Best Democracy advocates for Proportional Representation and fair election systems across Colorado and the United States.',
      content:  `Most Americans don't live in a real democracy. Predetermined elections, concentrated power, and distorted representation keep us from fair governance. But there are proven solutions — and it starts locally.

Best Democracy was founded in Boulder, CO in 2015 to bring Proportional Representation and fair election systems to Colorado and the United States.

This forum is a space for members to discuss election reform, share ideas, and organize for change. We welcome everyone who believes in inclusive, representative democracy.

**Getting started:**
- Read about our proposed remedies on the Remedies pages
- Learn how Single Transferable Vote works
- Find out why At-Large Plurality elections are a problem
- Join us at an upcoming event

The first step is education. Please tell your friends and family about Best Democracy and Proportional Representation.`,
      type:     'BLOG',
      published: true,
      featured:  true,
      category: 'General',
      authorId: admin.id,
    },
  });

  // Sample upcoming event
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 14);
  eventDate.setHours(18, 30, 0, 0);

  await prisma.event.upsert({
    where:  { slug: 'boulder-pro-rep-meetup' },
    update: {},
    create: {
      title:       'Boulder Pro Rep Meetup',
      slug:        'boulder-pro-rep-meetup',
      description: 'Join us for our monthly discussion on Proportional Representation and election reform in Colorado. We\'ll cover updates on Home Rule efforts in Boulder County, discuss the latest court cases, and plan our next action steps.\n\nAll are welcome — new members especially encouraged!',
      isVirtual:   false,
      location:    'Boulder Public Library, 1001 Arapahoe Ave, Boulder, CO',
      startDate:   eventDate,
      published:   true,
      meetupUrl:   'https://www.meetup.com/best-democracy-boulder',
    },
  });

  console.log('Seed complete!');
  console.log('\nAdmin login:');
  console.log('  Email:    jesse@bestdemocracy.org');
  console.log('  Password: changeme123!');
  console.log('  ⚠️  Change this password immediately after first login!');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
