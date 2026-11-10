window.COURSE = {
  "lessons": [
    {
      "id": 1,
      "title": "Digital skills & office productivity",
      "objectives": [
        "Trace input, processing, output, and storage in a familiar computer task.",
        "Organize and share files with predictable names and appropriate permissions.",
        "Calculate and explain totals, criteria counts, and statuses in Excel.",
        "Use styles in Word and a readable chart in PowerPoint."
      ],
      "slides": [
        {
          "title": "Follow a computer task",
          "points": [
            "A keyboard captures input. The CPU runs instructions. A screen shows output. An SSD stores the saved file.",
            "RAM holds active work while the device is powered. Saved files persist on storage after a normal shutdown.",
            "An operating system manages hardware and files. Word is application software running on that system."
          ],
          "code": [],
          "example": "Print an attendance list. The keyboard provides input, Word lays out the list, the printer outputs it, and the saved file stays on disk.",
          "cue": "Ask students to classify a webcam and a touchscreen. A touchscreen can handle both input and output."
        },
        {
          "title": "Manage files people can find",
          "points": [
            "Use one project folder with Drafts, Data, and Exports subfolders.",
            "A file extension identifies a format. Renaming .docx to .pdf does not convert its contents. Use Export or Save As.",
            "Use versioned names such as attendance-v02.xlsx. Share a viewing link for review and grant edit access only when needed."
          ],
          "code": [],
          "example": "Put the editable attendance sheet in Data and its printable PDF in Exports. Open the PDF before sending it.",
          "cue": "Show the same filename on two formats. Ask which file a colleague should edit and which should be printed."
        },
        {
          "title": "Create a readable Word report",
          "points": [
            "Use Heading 1 and Heading 2 styles for structure. Use a table for aligned data and page breaks when a new page is required.",
            "Add page numbers with the footer and use a caption to describe a table or figure.",
            "Keep an editable DOCX and export a PDF for distribution. Inspect the PDF for clipped text and broken page breaks."
          ],
          "code": [],
          "example": "Produce a one-page attendance brief with a title, date range, findings, and a named next action.",
          "cue": "Change one heading style and show how every matching heading updates."
        },
        {
          "title": "Calculate and validate in Excel",
          "points": [
            "SUM adds values. COUNTIF counts cells that match a condition. IF chooses between two results.",
            "A relative reference moves when copied. An absolute reference such as $F$1 remains anchored.",
            "Filter to examine matching rows. Sort the entire table so each student's fields move together."
          ],
          "code": [
            "=SUM(B2:B5)",
            "=COUNTIF(B2:B5,\">=8\")",
            "=IF(B2>=$F$1,\"On track\",\"Follow up\")"
          ],
          "example": "With B2:B5 equal to 8, 10, 6, 9, SUM returns 33. COUNTIF with \">=8\" returns 3.",
          "cue": "Set F1 to 8, copy the status formula, then change F1 to 9. Ask which results should change and why."
        },
        {
          "title": "Explain the result with slides",
          "points": [
            "Start with one takeaway per slide. Use a bar chart for category comparisons and label units.",
            "Keep chart text readable at projector distance. Use animation only to reveal information in a sensible sequence.",
            "Present the finding, the supporting number, and the action in that order."
          ],
          "code": [],
          "example": "A two-bar chart can show 3 students on track and 1 needing follow-up. The action slide assigns a follow-up date.",
          "cue": "Ask for a title that states the finding, then check whether the title matches the chart."
        }
      ],
      "notes": [
        "Prepare Microsoft 365 or an equivalent office suite. Make a blank spreadsheet and keep an offline copy of the practice data.",
        "Show how a missing dollar sign changes a copied formula. If a device has a different locale, demonstrate its formula separator.",
        "Ask students to predict the output before running the formula and to verify the count against the actual rows.",
        "Rubric /10: file organization 2, correct formulas 4, clear brief 2, accurate chart and takeaway 2.",
        "Homework: add a fifth fictional record with attendance 7, extend all ranges, and update the slide. Expected total is 40 with 3 students on track."
      ],
      "refs": [
        [
          "Microsoft 365 training",
          "https://support.microsoft.com/en-gb/office/o365-itpro/train-your-users-on-office-and-microsoft-365",
          "Browse the Word and PowerPoint sections for styles, slide layouts, and presentation tools."
        ],
        [
          "Microsoft Excel COUNTIF",
          "https://support.microsoft.com/en-us/excel/get-started/use-the-countif-function-in-microsoft-excel",
          "Check the range and criteria syntax before building the attendance count."
        ]
      ],
      "quiz": [
        {
          "prompt": "Which component normally keeps a saved workbook after shutdown?",
          "choices": [
            "SSD",
            "RAM",
            "CPU registers",
            "Display panel"
          ],
          "answer": 0,
          "explanation": "Nonvolatile storage retains the saved file."
        },
        {
          "prompt": "Which software manages files and devices for other programs?",
          "choices": [
            "Word processor",
            "Operating system",
            "Spreadsheet",
            "Web page"
          ],
          "answer": 1,
          "explanation": "The operating system provides core file and hardware services."
        },
        {
          "prompt": "How do you create a real PDF from a Word document?",
          "choices": [
            "Change the extension",
            "Move it into Exports",
            "Use Export or Save As PDF",
            "Duplicate the file"
          ],
          "answer": 2,
          "explanation": "Export converts the document into the PDF format."
        },
        {
          "prompt": "What is the SUM of 8, 10, 6, and 9?",
          "choices": [
            "23",
            "30",
            "32",
            "33"
          ],
          "answer": 3,
          "explanation": "The four values add up to 33."
        },
        {
          "prompt": "What does =COUNTIF(B2:B5,\">=8\") return for those values?",
          "choices": [
            "3",
            "4",
            "2",
            "33"
          ],
          "answer": 0,
          "explanation": "8, 10, and 9 meet the threshold."
        },
        {
          "prompt": "Which reference stays fixed when a formula is copied down?",
          "choices": [
            "B2",
            "$F$1",
            "F1",
            "B2:B5"
          ],
          "answer": 1,
          "explanation": "The dollar signs anchor the column and row."
        },
        {
          "prompt": "Which tool keeps all Word section headings consistently formatted?",
          "choices": [
            "Extra blank lines",
            "Text boxes on every page",
            "Heading styles",
            "Manual page breaks"
          ],
          "answer": 2,
          "explanation": "Styles apply a shared formatting definition to headings."
        },
        {
          "prompt": "Which chart best compares two attendance categories in this exercise?",
          "choices": [
            "Scatter plot",
            "Time-series line chart",
            "Empty slide with animation",
            "Bar chart"
          ],
          "answer": 3,
          "explanation": "A bar chart makes the two category counts easy to compare."
        }
      ],
      "track": "BQ-006 · Computer & IT Fundamentals",
      "summary": "Turn a folder of raw classroom records into a clean document, a working spreadsheet, and a short presentation.",
      "lab": {
        "title": "Attendance reporting pack",
        "points": [
          "Create Data, Drafts, and Exports folders and enter the four records in Excel.",
          "Place the threshold 8 in F1. Calculate total, count at or above the threshold, and copy a status formula for all four rows.",
          "Draft a one-page Word brief and export it as PDF. Create two PowerPoint slides with the key finding and next action.",
          "Inspect all three deliverables. Repeat the status check with a threshold of 9, then restore the threshold to 8."
        ],
        "example": "A trainer needs an attendance summary without exposing student identities. Use fictional labels A, B, C, D and attendance counts 8, 10, 6, 9 out of 10.",
        "deliverable": "Submit the workbook, editable brief, PDF, and slides. Expected at threshold 8: 33 sessions, 3 on track, 1 follow-up."
      }
    },
    {
      "id": 2,
      "title": "Build a WordPress website",
      "objectives": [
        "Explain how a domain, hosting, and WordPress fit together.",
        "Choose pages, posts, categories, and tags for different content.",
        "Build a page with blocks or Elementor and verify it on a narrow viewport.",
        "Assign roles based on the work each person needs to do."
      ],
      "slides": [
        {
          "title": "From address to website",
          "points": [
            "A domain is a name people type. Hosting serves the site's files and runs WordPress. WordPress uses a database for content and settings.",
            "A local site gives you a practice environment. Hosting makes the site reachable through a public or restricted URL.",
            "Save a backup before major changes and keep track of where the files and database live."
          ],
          "code": [],
          "example": "Build a fictional Balakot Skills Hub locally. The project can use a public host later when content and forms are ready.",
          "cue": "Ask which item changes if the client moves host but keeps the same domain."
        },
        {
          "title": "Organize content and navigation",
          "points": [
            "Pages suit stable content such as Home, Courses, and Contact. Posts suit dated updates and announcements.",
            "A category groups posts broadly. Tags label narrower topics that recur across posts.",
            "Set the homepage and add main links to navigation. Menu editing depends on whether the active theme uses the Site Editor or classic menus."
          ],
          "code": [],
          "example": "Keep Courses as a page. Publish a dated enrollment update as a post in Announcements.",
          "cue": "Ask learners to classify a price list, a registration notice, and an About page before opening the editor."
        },
        {
          "title": "Build a useful page",
          "points": [
            "A theme controls the overall design. A plugin adds a capability such as a contact form.",
            "In the block editor, assemble a heading, text, image, and button. In Elementor, build the same hierarchy inside a container and check responsive spacing.",
            "Give informative images descriptive alt text. Resize oversized media before uploading and use meaningful link text."
          ],
          "code": [],
          "example": "Write \"View course schedule\" as the button label and link it directly to Courses.",
          "cue": "Compare the same page on a phone and a desktop. Check text, spacing, keyboard focus, and the call to action."
        },
        {
          "title": "Choose roles and moderate comments",
          "points": [
            "An Editor can manage content across authors. An Author can publish their own posts. A Contributor can draft their own posts for review.",
            "Reserve Administrator access for people responsible for configuration and maintenance.",
            "Review comments before approval as needed. Keep moderation rules and a review workflow documented."
          ],
          "code": [],
          "example": "Give a trainee who writes drafts the Contributor role. Ask an Editor to approve and publish the drafts.",
          "cue": "Open the dashboard in a separate trainee session. Compare which menus the trainee and site maintainer see."
        },
        {
          "title": "Test the handoff",
          "points": [
            "Check every menu item, public page, and button as a visitor. Confirm drafts are only available to the intended users.",
            "For a test form, submit fictional data and verify where the message goes.",
            "Record the theme, essential plugins, and update owner in a handoff note."
          ],
          "code": [],
          "example": "Verify the three navigation links at phone width and record one issue and its fix.",
          "cue": "Ask partners to swap devices or viewport widths and review each other's homepage."
        }
      ],
      "notes": [
        "Prepare a local WordPress install, one block theme, a sample image, and two demo accounts. Have screenshots ready if installs are delayed.",
        "If students cannot find Appearance → Menus, check the theme type and show the Navigation block in the Site Editor when applicable.",
        "Ask pairs to explain why they used a page or post and demonstrate the result in a private visitor window.",
        "Rubric /10: content structure 3, responsive layout and accessibility 3, tested links or form 2, permissions explanation 2.",
        "Homework: create a second announcement, add a consistent category, and have a partner test both mobile navigation and descriptive link text."
      ],
      "refs": [
        [
          "WordPress block editor",
          "https://wordpress.org/documentation/article/wordpress-block-editor/",
          "Learn how to insert, group, and arrange the blocks used in the homepage."
        ],
        [
          "WordPress roles and capabilities",
          "https://wordpress.org/documentation/article/roles-and-capabilities/",
          "Compare what Contributors, Authors, Editors, and Administrators can do."
        ],
        [
          "Elementor mobile editing",
          "https://elementor.com/help/responsive-editing/",
          "Review Elementor's controls for testing and adjusting layouts on smaller screens."
        ]
      ],
      "quiz": [
        {
          "prompt": "What is the main purpose of a domain name?",
          "choices": [
            "Store posts",
            "Provide a readable site address",
            "Resize images",
            "Grant editor access"
          ],
          "answer": 1,
          "explanation": "A domain is a human-readable name that resolves to a network destination."
        },
        {
          "prompt": "Where should a dated enrollment announcement normally go?",
          "choices": [
            "Theme settings",
            "A user profile",
            "A post",
            "A form field"
          ],
          "answer": 2,
          "explanation": "Posts suit chronological updates."
        },
        {
          "prompt": "What groups posts under a broad recurring topic?",
          "choices": [
            "A category",
            "Alt text",
            "A backup",
            "A WordPress role"
          ],
          "answer": 0,
          "explanation": "Categories group posts by broader subject."
        },
        {
          "prompt": "Which adds a contact-form feature?",
          "choices": [
            "Theme background",
            "Image caption",
            "Post category",
            "Plugin"
          ],
          "answer": 3,
          "explanation": "Plugins extend WordPress with features such as forms."
        },
        {
          "prompt": "Which role suits someone who writes drafts for approval?",
          "choices": [
            "Contributor",
            "Administrator",
            "Subscriber",
            "Editor"
          ],
          "answer": 0,
          "explanation": "Contributors can write drafts but cannot publish them by default."
        },
        {
          "prompt": "Which button label best explains the destination?",
          "choices": [
            "Here",
            "View course schedule",
            "More",
            "Link"
          ],
          "answer": 1,
          "explanation": "The descriptive label tells visitors what to expect."
        },
        {
          "prompt": "Where should you check responsive spacing?",
          "choices": [
            "Only the theme name",
            "Only the editor sidebar",
            "On a narrow preview and a real phone when available",
            "Only the site title"
          ],
          "answer": 2,
          "explanation": "Testing the rendered page reveals layout and interaction issues."
        },
        {
          "prompt": "What should a form handoff verify?",
          "choices": [
            "The button color alone",
            "Only the plugin version",
            "Only the existence of a draft",
            "A test submission arrives at its intended destination"
          ],
          "answer": 3,
          "explanation": "A delivery check tests the full visitor path."
        }
      ],
      "track": "BQ-007 · Web Development",
      "summary": "Build a local service website with a clear navigation structure, accessible content, and a mobile layout.",
      "lab": {
        "title": "Three-page site build",
        "points": [
          "Create the pages, set Home as the front page, and add navigation.",
          "Build a hero and a call to action, then publish an announcement post in a dedicated category.",
          "Check the phone layout and confirm the Courses button works. If a form is installed, send one fictional test submission.",
          "Document the role you would assign a trainee and capture evidence of a visitor test."
        ],
        "example": "Use a local or approved staging WordPress site. The fictional Skills Hub needs a Home page, Courses page, and Contact page.",
        "deliverable": "Submit desktop and phone screenshots, a page and post inventory, and three checked visitor paths."
      }
    },
    {
      "id": 3,
      "title": "Launch a WordPress store",
      "objectives": [
        "Choose simple or variable WooCommerce products.",
        "Configure and verify prices, stock, delivery, and sandbox checkout.",
        "Explain how product content, search visibility, and performance affect launch readiness.",
        "Document a backup and a tested restore plan."
      ],
      "slides": [
        {
          "title": "Define the catalog",
          "points": [
            "A simple product has one set of purchasing options. A variable product has selectable variations with their own price, stock, or SKU.",
            "Categories organize similar products. An attribute describes a choice or property, such as Serving size.",
            "A clear title, concise description, useful image, and accurate price make the product easier to assess."
          ],
          "code": [],
          "example": "Use a simple Rice Bowl and a variable Chicken Karahi with Half and Full servings. Use fictional prices of PKR 1,200 and 2,200.",
          "cue": "Ask whether serving size belongs in a tag or should be a variation when the size changes price."
        },
        {
          "title": "Verify the purchase path",
          "points": [
            "Review currency, stock, delivery zones, and payment settings before running an order.",
            "Use a sandbox payment method or a test-only offline method on staging.",
            "Check the product, cart, checkout, order record, and notifications. Include an address outside the available delivery area."
          ],
          "code": [],
          "example": "A fictional Half Karahi at PKR 1,200 plus PKR 150 delivery should total PKR 1,350 when tax and discounts are zero.",
          "cue": "Follow one order from the storefront into the dashboard. Compare cart total, order total, and expected stock behavior."
        },
        {
          "title": "Prepare the site for search",
          "points": [
            "Use descriptive titles, product copy, meaningful URLs, and internal links.",
            "Decide which public pages should be indexable. Keep staging protected and review search settings after moving to production.",
            "Use a sitemap and Search Console to inspect URLs and monitor indexing. Discovery can take time."
          ],
          "code": [],
          "example": "Link the restaurant menu page to the Chicken Karahi product using a descriptive anchor.",
          "cue": "Ask which report would help investigate a public product page that has not appeared in Google."
        },
        {
          "title": "Improve speed with evidence",
          "points": [
            "Record a baseline for the same page under similar conditions. Prioritize oversized images and unneeded scripts.",
            "Optimize image sizes and apply caching carefully. Review plugin and host guidance for dynamic cart, checkout, and account pages.",
            "Repeat the performance check and re-test the buying journey after configuration changes."
          ],
          "code": [],
          "example": "Resize a 2 MB hero image and compare transfer size before and after. Test that two sessions still have separate carts.",
          "cue": "Show how an optimization checklist includes both a performance metric and a behavior check."
        },
        {
          "title": "Plan recovery and handoff",
          "points": [
            "Back up site files and the database. Keep recovery copies separate from the live site and restrict access.",
            "Restore to an isolated test environment. Check pages, admin login, and sample order data after the restore.",
            "Record change owners, support contact, and the checks required before a release."
          ],
          "code": [],
          "example": "Keep a launch record with test order ID, backup timestamp, and restore evidence.",
          "cue": "Ask the class how a backup schedule affects lost orders after a failure."
        }
      ],
      "notes": [
        "Prepare a WooCommerce staging install, two lightweight demo product images, a test delivery address, and a backup to restore in isolation.",
        "If a variation is missing on the storefront, check that the attribute is used for variations and that each variation has a price.",
        "Ask students to show their order record and explain what could happen to orders made after the last backup.",
        "Rubric /10: product configuration 3, checkout cases 3, measured optimization 2, recovery plan 2.",
        "Homework: add an out-of-stock variation, verify the visitor behavior, and record how staff should replenish stock."
      ],
      "refs": [
        [
          "WooCommerce product management",
          "https://woocommerce.com/document/managing-products/",
          "Review product types and the settings for prices, stock, and variations."
        ],
        [
          "WordPress backups",
          "https://developer.wordpress.org/advanced-administration/security/backup/",
          "Identify the database and file backups that support a complete restore."
        ],
        [
          "Google SEO Starter Guide",
          "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
          "Review site structure, descriptive content, and search discovery."
        ]
      ],
      "quiz": [
        {
          "prompt": "Which product type fits Half and Full serving options with different prices?",
          "choices": [
            "Variable",
            "Grouped list only",
            "External link only",
            "A tag"
          ],
          "answer": 0,
          "explanation": "Variable products allow distinct purchasing options with separate prices."
        },
        {
          "prompt": "What is the expected total for PKR 1,200 plus PKR 150 delivery?",
          "choices": [
            "PKR 1,200",
            "PKR 1,250",
            "PKR 1,350",
            "PKR 1,500"
          ],
          "answer": 2,
          "explanation": "The total is 1,200 + 150 with no other charges."
        },
        {
          "prompt": "Which test best verifies checkout end to end?",
          "choices": [
            "Preview the product image",
            "Place a staging order and inspect its totals and record",
            "Count the installed plugins",
            "Read the homepage title"
          ],
          "answer": 1,
          "explanation": "A real test order follows the full path and confirms stored results."
        },
        {
          "prompt": "Which type of page requires special care when applying shared caches?",
          "choices": [
            "A static brand story",
            "A plain policy page",
            "An image attachment",
            "Checkout"
          ],
          "answer": 3,
          "explanation": "Checkout carries visitor-specific state."
        },
        {
          "prompt": "Which two components are central to a WordPress backup?",
          "choices": [
            "Site files and database",
            "Logo and site title",
            "Products and menu labels",
            "Theme colors and domain name"
          ],
          "answer": 0,
          "explanation": "Files and the database together hold the site's code, media, settings, and records."
        },
        {
          "prompt": "What makes an optimization comparison meaningful?",
          "choices": [
            "Change three tools at once",
            "Measure the same page under similar conditions before and after",
            "Compare the desktop home page with the mobile checkout",
            "Record only the best result"
          ],
          "answer": 1,
          "explanation": "Comparable conditions make the observed difference more interpretable."
        },
        {
          "prompt": "What is a strong way to validate recovery?",
          "choices": [
            "Rename the backup file",
            "Count the image files",
            "Restore in isolation and verify expected data and key paths",
            "Keep the archive on the live site only"
          ],
          "answer": 2,
          "explanation": "A restoration test establishes whether the backup can recover the site."
        },
        {
          "prompt": "Which tool can help inspect Google's indexing of a product URL?",
          "choices": [
            "WordPress Media Library",
            "WooCommerce cart",
            "PowerPoint",
            "Google Search Console"
          ],
          "answer": 3,
          "explanation": "Search Console provides URL inspection and indexing information."
        }
      ],
      "track": "BQ-007 · Web Development",
      "summary": "Configure a small WooCommerce catalog and verify checkout, search readiness, performance, and recovery on staging.",
      "lab": {
        "title": "Restaurant storefront release checklist",
        "points": [
          "Create the two products and assign prices, descriptions, image text, and stock settings as needed.",
          "Configure a fictional PKR 150 delivery option and verify the PKR 1,350 test order for Half Karahi.",
          "Check a rejected delivery address, mobile layout, and a second independent cart.",
          "Record a baseline and retest after one image improvement. Document files plus database backup and restore evidence or a supervised restore plan."
        ],
        "example": "Build a fictional restaurant store on staging with a simple Rice Bowl and variable Chicken Karahi.",
        "deliverable": "Submit the catalog inventory, two checkout results, performance comparison, and release checklist."
      }
    },
    {
      "id": 4,
      "title": "Plan and measure digital marketing",
      "objectives": [
        "Map awareness, consideration, and conversion to different content.",
        "Match search intent to useful page content.",
        "Design a small content calendar and consent-based email follow-up.",
        "Calculate conversion rate and explain what analytics can and cannot prove."
      ],
      "slides": [
        {
          "title": "Set the audience and goal",
          "points": [
            "Define one audience by need, context, and decision. Use interviews or existing evidence when available.",
            "Choose one primary objective and measurable action, such as an inquiry form submission.",
            "A buyer persona is a working hypothesis. Update it after listening to users."
          ],
          "code": [],
          "example": "A fictional Balakot training center targets beginners seeking evening classes. Its campaign goal is verified course inquiries.",
          "cue": "Ask which is more useful for this campaign: 1,000 impressions or 20 verified inquiries. Discuss how each answers a different question."
        },
        {
          "title": "Map content to the funnel",
          "points": [
            "Awareness introduces the problem or opportunity. Consideration addresses options, requirements, and common questions.",
            "Conversion content offers a specific action. Retention content supports people after they sign up.",
            "Use a channel the audience actually uses and adapt the format and call to action."
          ],
          "code": [],
          "example": "A short video introduces classes, a schedule post answers questions, and a landing page invites users to request a callback.",
          "cue": "Ask students to rewrite a vague “Learn more” action for a person ready to enroll."
        },
        {
          "title": "Match keywords to intent",
          "points": [
            "Informational queries seek an answer. Commercial and transactional queries signal comparison or intent to act.",
            "Google Trends compares relative interest over time. Check location, period, and search term before drawing conclusions.",
            "Put useful answers on relevant pages. Write a descriptive title and heading, then add credible internal links."
          ],
          "code": [],
          "example": "“What is WordPress?” fits an explainer. “WordPress classes in Balakot” fits a local course page with schedule and inquiry form.",
          "cue": "Compare two search terms in the same region and time window. Explain why a Trends score is not an exact search count."
        },
        {
          "title": "Create a calendar and permission-based follow-up",
          "points": [
            "For each item, record the date, channel, funnel stage, owner, and call to action.",
            "Use accessible Canva graphics and concise copy. Treat AI-generated copy as a draft and verify claims before publishing.",
            "Send follow-up email to people who opted in and provide a clear way to unsubscribe."
          ],
          "code": [],
          "example": "Monday: short intro video. Wednesday: schedule and fee FAQ. Friday: opt-in email for people who asked for details.",
          "cue": "Give pairs two minutes to edit one draft for accuracy and one clear action."
        },
        {
          "title": "Measure a campaign",
          "points": [
            "Track one event aligned with the goal, such as a verified form submission. Test that one successful form action records one event.",
            "Define the denominator before calculating a rate. Label the date range and traffic source in reports.",
            "Build a portfolio case study with objective, work samples, measured outcome, and limitations. Use a clear scope and deliverables in freelance proposals."
          ],
          "code": [],
          "example": "12 verified inquiries from 300 landing-page visits is 4%. An increase in the rate alone does not establish which campaign change caused it.",
          "cue": "Ask students to describe the numbers in one sentence without claiming causation."
        }
      ],
      "notes": [
        "Prepare a blank calendar and a screenshot of a Trends comparison. Use mock analytics data and fictional contact details.",
        "Separate views, sessions, and verified inquiries on the board. Require students to label their denominator.",
        "Compare one strong and one weak headline. Ask what changes when the audience is already considering enrollment.",
        "Rubric /10: audience and funnel 3, intent and content 3, consent and tracking 2, correctly reported conversion 2.",
        "Homework: write a 100-word portfolio case summary and a two-sentence proposal for delivering the same campaign to a client."
      ],
      "refs": [
        [
          "Google SEO Starter Guide",
          "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
          "Review useful content, descriptive titles, and discoverable links."
        ],
        [
          "Google Trends Help",
          "https://support.google.com/trends/answer/4365533",
          "Read how to compare terms and interpret relative search interest."
        ],
        [
          "Google Analytics events",
          "https://developers.google.com/analytics/devguides/collection/ga4/events",
          "Review the purpose of events and plan how to test an inquiry event."
        ]
      ],
      "quiz": [
        {
          "prompt": "What is the primary campaign conversion in the lesson?",
          "choices": [
            "A page impression",
            "A verified inquiry submission",
            "A new design file",
            "An unpublished draft"
          ],
          "answer": 1,
          "explanation": "A verified inquiry is the requested business action."
        },
        {
          "prompt": "Which asset best serves someone considering an evening class?",
          "choices": [
            "An unrelated meme",
            "A staff-only note",
            "A schedule and fees FAQ",
            "A blank signup page"
          ],
          "answer": 2,
          "explanation": "The FAQ helps prospective learners evaluate the offer."
        },
        {
          "prompt": "Which query has the clearest local enrollment intent?",
          "choices": [
            "WordPress definition",
            "History of websites",
            "What is a plugin?",
            "WordPress classes in Balakot"
          ],
          "answer": 3,
          "explanation": "The query names a service and location."
        },
        {
          "prompt": "What does Google Trends primarily report in a comparison?",
          "choices": [
            "Relative search interest",
            "Exact campaign revenue",
            "Every searcher's identity",
            "Exact sales totals"
          ],
          "answer": 0,
          "explanation": "Trends normalizes search interest for the selected context."
        },
        {
          "prompt": "When should the follow-up email be sent?",
          "choices": [
            "Whenever an address is visible",
            "After the recipient opts in",
            "Before writing the schedule",
            "After importing a scraped list"
          ],
          "answer": 1,
          "explanation": "Permission-based follow-up respects the recipient's stated preference."
        },
        {
          "prompt": "What is 12 inquiries from 300 visits?",
          "choices": [
            "2.5%",
            "12%",
            "4%",
            "40%"
          ],
          "answer": 2,
          "explanation": "12 divided by 300 and multiplied by 100 equals 4%."
        },
        {
          "prompt": "What should you test for an inquiry event?",
          "choices": [
            "Only the font size",
            "Only whether the page loads",
            "Only whether the form looks good",
            "One confirmed submission produces one expected event"
          ],
          "answer": 3,
          "explanation": "Tracking validation checks successful conversion and duplicate recording."
        },
        {
          "prompt": "What belongs in a portfolio case study?",
          "choices": [
            "Goal, work, measured result, and limits",
            "A promise that every client gets the same result",
            "Only a logo",
            "Only impressions without context"
          ],
          "answer": 0,
          "explanation": "Evidence and limitations help a reader evaluate the work."
        }
      ],
      "track": "BQ-001 · Digital Marketing Beginner",
      "summary": "Build a one-week campaign around a clear audience, a search goal, and a measurable conversion.",
      "lab": {
        "title": "One-week campaign brief",
        "points": [
          "Describe one audience and one measurable objective. Write two search queries and match each to a page or post.",
          "Draft three calendar items for different funnel stages and one short opt-in follow-up email.",
          "Define how to verify an inquiry event. Compute the rate for 12 inquiries and 300 landing-page visits.",
          "Prepare a portfolio summary with audience, creative sample, proposed metric, and one limitation."
        ],
        "example": "A fictional training center wants beginners to request its class schedule. No actual posts or emails are required.",
        "deliverable": "Submit the brief, three calendar rows, follow-up draft, and 4% result with numerator and denominator."
      }
    },
    {
      "id": 5,
      "title": "Defend accounts, devices & websites",
      "objectives": [
        "Apply confidentiality, integrity, and availability to classroom data.",
        "Match common threats to preventive and detective controls.",
        "Prioritize safe response actions using a supplied incident timeline.",
        "Verify backups and document recovery priorities."
      ],
      "slides": [
        {
          "title": "Know what you are protecting",
          "points": [
            "Confidentiality limits disclosure. Integrity keeps information accurate and trustworthy. Availability keeps services usable when needed.",
            "An asset is something of value. A threat can harm it. A vulnerability is a weakness. Risk reflects likelihood and impact.",
            "Rank risks using the real effect on users and operations. Assign an owner to each priority control."
          ],
          "code": [],
          "example": "Unauthorized editing of grades harms integrity. Accidental publication harms confidentiality. A failed drive can harm availability.",
          "cue": "Ask the class to identify the primary impact of a backup failure during enrollment."
        },
        {
          "title": "Recognize phishing and protect identities",
          "points": [
            "Check the sender, expected context, destination, and requested action. Verify unusual requests through an independently known channel.",
            "Use unique passwords managed securely and enable MFA. Prefer phishing-resistant options, such as passkeys, where supported.",
            "Review permissions when staff change roles and remove access they no longer need."
          ],
          "code": [],
          "example": "A mock message asks a trainer to enter a password urgently. Report it and open the portal through a known bookmark.",
          "cue": "Have learners name a verification channel that does not depend on information inside the message."
        },
        {
          "title": "Harden devices, networks, and apps",
          "points": [
            "Maintain updates on phones, desktops, website plugins, and network devices. Remove unnecessary software and stale accounts.",
            "Separate guest Wi-Fi from staff resources. Limit access with least privilege and protect web traffic with HTTPS.",
            "Review website access controls, validate incoming data, and keep security-relevant logs. Apply the same access review to cloud accounts and IoT administration."
          ],
          "code": [],
          "example": "Visitors get guest Wi-Fi. Only authorized staff can access the attendance system and its admin area.",
          "cue": "Give students an inventory with a shared admin account, overdue updates, and a public export. Ask them to rank fixes."
        },
        {
          "title": "Respond to an incident",
          "points": [
            "Record the reported time, affected account or device, evidence, and owner. Use approved response channels.",
            "Triage and contain the impact with authorized staff. Preserve relevant evidence and communicate updates to the people responsible.",
            "Review how the issue happened after recovery. Turn the findings into preventive changes and updated procedures."
          ],
          "code": [],
          "example": "For a reported suspicious sign-in, the administrator verifies the event, revokes affected sessions when appropriate, and checks for unauthorized changes.",
          "cue": "Role-play reporter and responder. Ask the responder to distinguish observed facts from assumptions."
        },
        {
          "title": "Recover and improve",
          "points": [
            "Recovery time objective (RTO) is a target for how quickly a service should return. Recovery point objective (RPO) is a target for acceptable data loss measured in time.",
            "Protect backups and test restores in isolation. Compare tested recovery results with targets.",
            "Document scope and written authorization for security assessments. Practice reporting weaknesses with impact, remediation, and follow-up verification."
          ],
          "code": [],
          "example": "Daily backups may leave nearly a day of changes unrecovered. A four-hour RPO requires a strategy capable of restoring more recent data.",
          "cue": "Ask students to explain why a successful backup notification alone does not establish recovery readiness."
        }
      ],
      "notes": [
        "Prepare printed scenario cards, an inventory list, and a sample access review. Assign reporter, IT owner, and communications roles.",
        "Keep the exercise on fictional evidence and defensive review. Ask who has authority to take each proposed action.",
        "Ask which log could help confirm an alert and what information should be shared in the staff update.",
        "Rubric /10: assets and risks 2, evidence and triage 3, recovery targets 3, clear communication 2.",
        "Homework: write a one-page account hardening checklist for an imaginary school. Identify a control owner and a verification step for each item."
      ],
      "refs": [
        [
          "CISA Secure Our World",
          "https://www.cisa.gov/secure-our-world",
          "Review practical guidance on phishing recognition, strong passwords, MFA, and software updates."
        ],
        [
          "NIST incident response recommendations",
          "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
          "Read how preparation, detection, response, and recovery fit into cybersecurity risk management."
        ],
        [
          "NIST Cybersecurity Framework",
          "https://www.nist.gov/cyberframework",
          "Use the framework overview to classify controls and responsibilities."
        ]
      ],
      "quiz": [
        {
          "prompt": "A public link exposes a private student list. What is the clearest immediate impact?",
          "choices": [
            "Confidentiality",
            "Chart formatting",
            "File naming",
            "System speed"
          ],
          "answer": 0,
          "explanation": "The information has been disclosed beyond its intended audience."
        },
        {
          "prompt": "What is the best way to verify an unexpected password request?",
          "choices": [
            "Reply with the password",
            "Use an independently known contact channel",
            "Open the link first",
            "Forward it to every student"
          ],
          "answer": 1,
          "explanation": "Independent verification avoids relying on the suspicious message."
        },
        {
          "prompt": "Which control limits a guest device from reaching staff resources?",
          "choices": [
            "A new desktop wallpaper",
            "A shared admin password",
            "Network separation",
            "A renamed router"
          ],
          "answer": 2,
          "explanation": "Separate network access limits the paths guest devices can use."
        },
        {
          "prompt": "Which record is appropriate at the start of triage?",
          "choices": [
            "An invented attribution",
            "A personal opinion about the sender",
            "A deletion log for all evidence",
            "Alert time, affected account, and observed events"
          ],
          "answer": 3,
          "explanation": "Record facts and timestamps to support investigation."
        },
        {
          "prompt": "What does an RPO of four hours describe?",
          "choices": [
            "A target for acceptable data loss measured in time",
            "The budget for a firewall",
            "How often staff rotate roles",
            "The number of restored devices"
          ],
          "answer": 0,
          "explanation": "RPO expresses the target point in time for recovery."
        },
        {
          "prompt": "Which demonstrates that recovery worked?",
          "choices": [
            "The backup job emailed a report",
            "An isolated restore passes data and service checks",
            "The file name contains a recent date",
            "The archive is larger than yesterday's"
          ],
          "answer": 1,
          "explanation": "Verification must show the restored service and required data actually work."
        },
        {
          "prompt": "A trainee needs to update one page. Which access design is best?",
          "choices": [
            "Share the system owner's password",
            "Grant every available permission",
            "Grant the minimum necessary permissions",
            "Let the trainee use a coworker's session"
          ],
          "answer": 2,
          "explanation": "Least privilege limits access to the work required."
        },
        {
          "prompt": "What should a defensive findings report include?",
          "choices": [
            "Only the screenshot",
            "Only the title",
            "A guess about the person responsible",
            "Observed weakness, impact, fix, and retest"
          ],
          "answer": 3,
          "explanation": "A finding should help the owner understand and verify a correction."
        }
      ],
      "track": "BQ-005 · Cyber Security Fundamentals",
      "summary": "Protect a small training center with layered controls and practice responding to a fictional incident.",
      "lab": {
        "title": "Incident response tabletop",
        "points": [
          "Classify the affected assets and primary risks. Separate what the timeline confirms from what needs checking.",
          "Write a short incident ticket with timestamps, reported evidence, owners, and three prioritized response actions.",
          "Set example RTO and RPO targets and describe how you would validate a restore from isolated backups.",
          "Write a plain-language status update for staff and identify one follow-up control with a verification method."
        ],
        "example": "Fictional timeline: 09:10 suspicious message reported, 09:17 unfamiliar sign-in alert, 09:21 export activity observed, 09:30 admin notified. Details are incomplete.",
        "deliverable": "Submit a timeline, incident ticket, recovery targets, and status update. The cause stays unconfirmed until corroborated."
      }
    },
    {
      "id": 6,
      "title": "Python, data & machine learning basics",
      "objectives": [
        "Use values, lists, dictionaries, conditions, loops, and functions in Python.",
        "Identify missing records, duplicates, and label inconsistencies.",
        "Distinguish regression from classification and explain a held-out evaluation.",
        "Interpret precision and recall for a small set of predictions."
      ],
      "slides": [
        {
          "title": "Set up and read Python",
          "points": [
            "Use a Python 3 interpreter, an editor, and a project folder. Run a script from the correct working directory.",
            "A string holds text, an integer holds a whole number, and a Boolean holds True or False.",
            "A list stores a sequence of values. A dictionary maps keys to values and can describe one record."
          ],
          "code": [],
          "example": "Use a dictionary with student_id and attended fields, then store several records in a list.",
          "cue": "Ask what happens when a numeric field is stored as a string. Demonstrate explicit conversion when the format is valid."
        },
        {
          "title": "Make decisions and reuse code",
          "points": [
            "A condition chooses a branch. A loop repeats work over values. A function names a reusable operation and returns its result.",
            "Use descriptive names and test normal, boundary, and invalid inputs.",
            "A class can group state and behavior. For a small list of records, dictionaries and simple functions are often enough."
          ],
          "code": [
            "def status(attended, threshold=8):",
            "    return \"On track\" if attended >= threshold else \"Follow up\"",
            "",
            "print([status(value) for value in [8, 10, 6, 9]])"
          ],
          "example": "A threshold function marks attendance 8 as on track when the cutoff is 8. Passing 7 should mark it for follow-up.",
          "cue": "Trace the condition for 7, 8, and 9 before executing the example."
        },
        {
          "title": "Prepare data",
          "points": [
            "Inspect column names, types, missing values, duplicates, and possible value ranges.",
            "Use NumPy arrays for numerical operations and Pandas tables for labeled rows and columns.",
            "Use a chart to look for patterns and outliers. Document every cleaning choice and report excluded rows."
          ],
          "code": [],
          "example": "Keep A:8, B:10, C:6, D:9. Set aside E:missing for verification and remove an identical duplicate row for B.",
          "cue": "Ask whether missing attendance means zero. Discuss what would justify either interpretation."
        },
        {
          "title": "Pick the right task and evaluate it",
          "points": [
            "Regression predicts a number. Classification predicts a label. Reporting summarizes known observations.",
            "Use data held out from training for evaluation and keep the target or later outcomes out of features.",
            "Precision answers how many predicted positives were correct. Recall answers how many actual positives were found."
          ],
          "code": [],
          "example": "With 3 true positives, 1 false positive, and 2 false negatives, precision is 3/4 or 75% and recall is 3/5 or 60%.",
          "cue": "Draw the three counts and have students point to the denominator for each metric."
        },
        {
          "title": "Move from data to language",
          "points": [
            "NLP treats text as data for tasks such as sentiment or topic classification.",
            "Models can misread wording, spelling variation, or languages underrepresented in training data.",
            "Check output against labeled examples, including short or ambiguous inputs."
          ],
          "code": [],
          "example": "“The class is fine, but the schedule clashes” can be positive about content and negative about scheduling.",
          "cue": "Ask students to agree on a labeling rule before scoring any predictions."
        }
      ],
      "notes": [
        "Prepare Python 3 and a code editor or notebook. Keep printed code and a hand-trace table available.",
        "Watch for indentation errors, threshold comparisons that exclude 8, and numeric strings. Ask students to test boundaries before adding features.",
        "Explain that a threshold rule can classify labels without being a trained machine-learning model.",
        "Rubric /10: correct function and boundaries 3, cleaning decisions 3, task distinctions 2, metric interpretation 2.",
        "Homework: add a separate validation rule for counts outside 0–10 and two test records that demonstrate it."
      ],
      "refs": [
        [
          "Python tutorial",
          "https://docs.python.org/3/tutorial/",
          "Review control flow, functions, data structures, and classes."
        ],
        [
          "Pandas introductory tutorials",
          "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html",
          "Follow examples for reading, selecting, and summarizing tabular data."
        ],
        [
          "Scikit-learn model evaluation",
          "https://scikit-learn.org/stable/modules/model_evaluation.html",
          "Compare classification and regression metrics, then review precision and recall."
        ]
      ],
      "quiz": [
        {
          "prompt": "Which structure stores named fields such as student_id and attended?",
          "choices": [
            "Dictionary",
            "A single integer",
            "Boolean",
            "Plain separator"
          ],
          "answer": 0,
          "explanation": "A dictionary maps field names to values."
        },
        {
          "prompt": "With threshold=8, what should status(8) return?",
          "choices": [
            "Follow up",
            "On track",
            "An empty list",
            "An error"
          ],
          "answer": 1,
          "explanation": "The condition is greater than or equal to the threshold."
        },
        {
          "prompt": "What is a sound first action for an unknown attendance count?",
          "choices": [
            "Assume ten",
            "Delete every student's record",
            "Flag the missing value and document how it is handled",
            "Assume zero without checking"
          ],
          "answer": 2,
          "explanation": "A missing value has no known numeric meaning without context."
        },
        {
          "prompt": "Which task is regression?",
          "choices": [
            "Label inquiries as sales or support",
            "Count already recorded sales",
            "Choose a category for a message",
            "Predict next week's number of inquiries"
          ],
          "answer": 3,
          "explanation": "Regression estimates a numeric target."
        },
        {
          "prompt": "What data is used for a held-out evaluation?",
          "choices": [
            "Examples separate from training",
            "Only repeated training examples",
            "Only the model's best guesses",
            "A screenshot of the training process"
          ],
          "answer": 0,
          "explanation": "Held-out examples provide a check on performance beyond training data."
        },
        {
          "prompt": "What is precision for TP=3 and FP=1?",
          "choices": [
            "60%",
            "75%",
            "25%",
            "100%"
          ],
          "answer": 1,
          "explanation": "Precision is TP divided by TP plus FP."
        },
        {
          "prompt": "What is recall for TP=3 and FN=2?",
          "choices": [
            "75%",
            "40%",
            "60%",
            "33%"
          ],
          "answer": 2,
          "explanation": "Recall is TP divided by TP plus FN."
        },
        {
          "prompt": "What should be fixed before comparing text classification scores?",
          "choices": [
            "The font of the dataset",
            "The notebook name",
            "The order of project folders",
            "A consistent labeling rule"
          ],
          "answer": 3,
          "explanation": "Consistent labels make model comparisons interpretable."
        }
      ],
      "track": "BQ-023 + BQ-024 · Shared AI foundations",
      "summary": "Use Python to clean a tiny dataset and explain the difference between reporting, prediction, and evaluation.",
      "lab": {
        "title": "Clean data and score predictions",
        "points": [
          "Enter the rows as Python dictionaries and identify the missing and duplicate entries.",
          "Retain four usable records, run the status function, and report how the other two rows were handled.",
          "Give one classroom example each of reporting, classification, and regression.",
          "For TP=3, FP=1, FN=2, calculate and interpret precision and recall."
        ],
        "example": "Start with A:8, B:10, C:6, D:9, E:missing, and a repeated B:10. Each count is out of 10.",
        "deliverable": "Submit the script, four status labels, a cleaning log, and the 75% and 60% metric calculations."
      }
    },
    {
      "id": 7,
      "title": "Create and evaluate generative AI outputs",
      "objectives": [
        "Explain tokens, transformers, and multimodal inputs in everyday terms.",
        "Draft a prompt with a goal, source context, constraints, and output format.",
        "Compare prompting, retrieval, and fine-tuning.",
        "Evaluate answers against known facts and require evidence for claims."
      ],
      "slides": [
        {
          "title": "How a model generates",
          "points": [
            "Tokens are units of text a language model processes. A token may be a word, part of a word, or punctuation.",
            "Transformers use attention to weigh relationships within context. An autoregressive language model predicts the next token repeatedly.",
            "Outputs can be plausible and wrong. Facts used in a school or client setting need verification."
          ],
          "code": [],
          "example": "An assistant writes a convincing start date that is absent from the provided schedule. The wording cannot verify the date.",
          "cue": "Ask students what evidence would turn the date from a plausible guess into a supported answer."
        },
        {
          "title": "Prompt with a clear contract",
          "points": [
            "State the task, audience, allowed context, and output structure.",
            "Say how to handle missing information and include an example when output consistency matters.",
            "Compare the output of a vague prompt with a precise one and log the difference."
          ],
          "code": [],
          "example": "“Use only the supplied course sheet. Answer in two sentences and cite the section. If it is absent, say the schedule does not specify it.”",
          "cue": "Read both prompts aloud. Ask students to predict which errors the second version may reduce and which still require review."
        },
        {
          "title": "Work with text and images",
          "points": [
            "Multimodal systems may accept more than one kind of input, such as text plus an image.",
            "Use a fictional flyer and confirm names, dates, numbers, and small print against the original.",
            "Remove personal data and use assets the class is permitted to share."
          ],
          "code": [],
          "example": "Extract the time and location from a poster, then compare the answer against the source image at full size.",
          "cue": "Ask students to design one ambiguity test using a partly cropped or unreadable notice."
        },
        {
          "title": "Ground answers with retrieval",
          "points": [
            "Retrieval-augmented generation (RAG) finds relevant source passages and supplies them as context at answer time.",
            "Index approved sources and retain section names or IDs for traceable answers.",
            "Fine-tuning changes model behavior using examples. Retrieval is appropriate when factual material changes and should be cited."
          ],
          "code": [],
          "example": "Store a small class policy by section. Retrieve Schedule §2 for a timing question and cite that section in the answer.",
          "cue": "If two documents disagree, have the assistant surface the conflict and route it for review."
        },
        {
          "title": "Evaluate before sharing",
          "points": [
            "Keep a fixed test set with normal, ambiguous, missing, and conflicting cases.",
            "Score factual correctness, citation support, and safe handling of unknowns. Record failures and change one thing at a time.",
            "Preserve a human review step before publishing generated copy or formal answers."
          ],
          "code": [],
          "example": "If a test answer cites §2 but §2 does not support the statement, mark the citation as unsupported.",
          "cue": "Have pairs swap three questions and score answers against the same source sheet."
        }
      ],
      "notes": [
        "Prepare a fictional one-page FAQ, an outdated version, and a screenshot of a flyer. Keep the manual test path available.",
        "Ask learners to open each cited section. A citation field alone does not establish grounding.",
        "Discuss how a retrieval error and a generation error can produce different failures and require different fixes.",
        "Rubric /10: prompt contract 2, answer accuracy 3, citation support 3, handling unknowns and conflicts 2.",
        "Homework: add two paraphrased questions and one partially unreadable flyer case to the evaluation table."
      ],
      "refs": [
        [
          "Hugging Face LLM Course",
          "https://huggingface.co/learn/llm-course/chapter1/1",
          "Learn the concepts behind transformer models and common NLP tasks."
        ],
        [
          "OpenAI prompting guidance",
          "https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt",
          "Review examples of clear task instructions and specific output requirements."
        ],
        [
          "OpenAI file search",
          "https://developers.openai.com/api/docs/guides/tools-file-search",
          "Read how retrieval supplies relevant passages from indexed documents."
        ]
      ],
      "quiz": [
        {
          "prompt": "What is a token?",
          "choices": [
            "A unit of text processed by a model",
            "A guaranteed citation",
            "A complete paragraph in every case",
            "A network firewall"
          ],
          "answer": 0,
          "explanation": "Tokens are text units and may be smaller than a word."
        },
        {
          "prompt": "What should an FAQ prompt specify?",
          "choices": [
            "Only the greeting",
            "Task, source, constraints, and answer format",
            "A promise that the model is always correct",
            "A random formatting rule only"
          ],
          "answer": 1,
          "explanation": "A clear prompt defines the answer contract."
        },
        {
          "prompt": "Which is a multimodal input?",
          "choices": [
            "A shorter text prompt",
            "One text line repeated twice",
            "A flyer image plus a written question",
            "A plain spreadsheet cell as text only"
          ],
          "answer": 2,
          "explanation": "Image and text are different input modalities."
        },
        {
          "prompt": "What should the FAQ say when fees are absent from the source?",
          "choices": [
            "Invent a typical fee",
            "Use the most confident guess",
            "Copy the latest internet search result",
            "The provided sheet does not specify a fee"
          ],
          "answer": 3,
          "explanation": "An unknown answer is appropriate when evidence is missing."
        },
        {
          "prompt": "What does retrieval do in RAG?",
          "choices": [
            "Supplies relevant source passages at answer time",
            "Guarantees every claim is true",
            "Publishes answers automatically",
            "Deletes old logs"
          ],
          "answer": 0,
          "explanation": "Retrieval adds source context for the model to use."
        },
        {
          "prompt": "Which test catches an unsupported citation?",
          "choices": [
            "Count how many sections are listed",
            "Open the cited passage and compare it with the claim",
            "Check the answer font",
            "Compare answer lengths only"
          ],
          "answer": 1,
          "explanation": "The cited text must support the specific statement."
        },
        {
          "prompt": "Which technique changes model parameters through examples?",
          "choices": [
            "Adding a heading",
            "Opening the FAQ",
            "Fine-tuning",
            "Looking up a passage"
          ],
          "answer": 2,
          "explanation": "Fine-tuning updates model parameters using training examples."
        },
        {
          "prompt": "What should you do when two schedule sources disagree?",
          "choices": [
            "Pick the earliest time by default",
            "Assume the longer answer is correct",
            "Use both times as confirmed",
            "Flag the conflict and require review"
          ],
          "answer": 3,
          "explanation": "Conflicting evidence needs resolution before presenting a firm answer."
        }
      ],
      "track": "BQ-024 · Generative AI",
      "summary": "Build a source-grounded FAQ prototype and test how it handles ambiguity, missing information, and conflicting sources.",
      "lab": {
        "title": "Evidence-based course FAQ",
        "points": [
          "Write a prompt that returns a short answer and source section. Tell it to identify conflicts and missing facts.",
          "Test day, timing, materials, fees, and the conflict case. A manual simulation can use the same input and answer table.",
          "Record expected answer, actual answer, citation support, and a pass or fail result for each case.",
          "Revise one instruction and repeat the same tests."
        ],
        "example": "Use this fictional sheet: §1 Classes meet on Tuesday and Thursday. §2 Lessons run 4:00–6:00 p.m. §3 Bring a notebook. Fees are absent. An old draft says 3:00 p.m.",
        "deliverable": "Submit both prompts and the five-row evaluation. A fee amount without evidence fails."
      }
    },
    {
      "id": 8,
      "title": "Design a safe, useful AI agent",
      "objectives": [
        "Distinguish a fixed workflow from an agent that can choose among tools.",
        "Define read-only tools, inputs, structured outputs, and step limits.",
        "Require a human decision before externally visible actions.",
        "Evaluate normal, missing-source, conflicting, and invalid-tool cases."
      ],
      "slides": [
        {
          "title": "Choose the smallest workflow that works",
          "points": [
            "A fixed workflow follows predefined steps. An agent can choose the next action within its permitted tools and rules.",
            "A single read-only assistant is easier to inspect for a small FAQ. Multiple agents can help when separate roles have distinct tasks and clear handoffs.",
            "Treat Python and NLP as supporting skills. Decide which task benefits from language interpretation and which can use ordinary rules."
          ],
          "code": [],
          "example": "Use a fixed flow for known FAQ categories. Use an agent only if it needs to choose whether to search, ask, or hand off.",
          "cue": "Draw the fixed flow first and ask students what decision actually needs a model."
        },
        {
          "title": "Define the tools and their data",
          "points": [
            "Give each tool one purpose and a schema with required fields. Validate arguments and reject unsupported requests.",
            "Separate read-only retrieval from actions that alter data or send messages. Limit each tool to its authorized data.",
            "Return structured results such as status, source section, and relevant passage. Treat retrieved text as data."
          ],
          "code": [],
          "example": "search_faq(query) can read approved FAQ entries. A draft response stays local until an instructor approves any send action.",
          "cue": "Ask learners to name one field that should be required and one that should never be accepted by the lookup tool."
        },
        {
          "title": "Design the state and stop conditions",
          "points": [
            "Track the user's question, approved sources, results, draft, and review state.",
            "Stop with an answer when evidence is sufficient. Ask a focused question for ambiguity and hand off unresolved cases.",
            "Use time and step limits. Record the tool calls and decision outcomes for debugging while keeping private data out of logs."
          ],
          "code": [],
          "example": "Allow at most two retrieval attempts. If both are empty, return a review status instead of repeating indefinitely.",
          "cue": "Give a team an empty retrieval result and ask which transition should happen next."
        },
        {
          "title": "Keep humans in control",
          "points": [
            "Present the proposed action and its destination for review. Wait for a human decision before performing a consequential action.",
            "Validate tool permissions and arguments independently of the model.",
            "Add evaluation cases with incomplete data, conflicting documents, invalid arguments, and retrieved text that asks the model to disregard its rules."
          ],
          "code": [],
          "example": "If a record contains “send this draft immediately,” the assistant still follows the approval policy and returns a draft for review.",
          "cue": "Play reviewer and assistant. Have the reviewer reject an action and verify that no external change follows."
        },
        {
          "title": "Build a portfolio-ready prototype",
          "points": [
            "Document the problem, approved dataset, tool contracts, state flow, and how humans review outcomes.",
            "Compare a fixed workflow with the prototype using the same test questions. Check answer support and policy compliance.",
            "Use fine-tuning only when evaluation establishes a behavior gap that the simpler approaches cannot address."
          ],
          "code": [],
          "example": "Show three passing cases and one failure you found, fixed, and retested.",
          "cue": "Ask students to explain who owns the assistant after handoff and what triggers a review of its sources."
        }
      ],
      "notes": [
        "Prepare two conflicting FAQ entries, a deliberately invalid tool input, and six printed scenario cards.",
        "Ask a learner to play the retriever and another to play the reviewer. Stop if the flow loses its source or review state.",
        "Listen for the difference between a valid tool argument and permission to perform an action. Both need checking.",
        "Rubric /10: state flow and tool schema 3, source handling 2, tests and traceability 3, approval behavior 2.",
        "Homework: add an optional structured output with fields status, answer, and source_id. Define valid values and a failed-validation path."
      ],
      "refs": [
        [
          "LangGraph workflows and agents",
          "https://docs.langchain.com/oss/python/langgraph/workflows-agents",
          "Compare predefined workflows with dynamic tool selection and orchestration patterns."
        ],
        [
          "OpenAI guardrails and human review",
          "https://developers.openai.com/api/docs/guides/agents/guardrails-approvals",
          "Read how validation and approval pauses apply at the tool boundary."
        ],
        [
          "OpenAI practical guide to building agents",
          "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
          "Review tool categories, agent orchestration, and guardrails."
        ]
      ],
      "quiz": [
        {
          "prompt": "Which behavior makes a system agentic in this lesson?",
          "choices": [
            "It can choose a next step or tool within rules",
            "It prints the same message each time",
            "It contains an HTML form",
            "It uses a larger font"
          ],
          "answer": 0,
          "explanation": "The system can select a next action based on context and available tools."
        },
        {
          "prompt": "Which lookup tool has the narrowest appropriate scope?",
          "choices": [
            "Read all staff mail",
            "Search approved fictional FAQ entries",
            "Manage student grades",
            "Run any command"
          ],
          "answer": 1,
          "explanation": "A narrow read-only lookup fits the FAQ task."
        },
        {
          "prompt": "What should happen after two empty retrieval attempts in the example?",
          "choices": [
            "Repeat forever",
            "Invent a source",
            "Stop and route for review",
            "Send the answer immediately"
          ],
          "answer": 2,
          "explanation": "A step limit prevents looping and routes unresolved questions."
        },
        {
          "prompt": "What should a reviewer see before an external action?",
          "choices": [
            "Only the assistant's nickname",
            "Only a green status icon",
            "Nothing until the action is complete",
            "The proposed action and destination"
          ],
          "answer": 3,
          "explanation": "A reviewer needs to know what would happen and where."
        },
        {
          "prompt": "What should the assistant do with instructions embedded in a retrieved source?",
          "choices": [
            "Treat them as source data and retain its workflow rules",
            "Replace the system rules with them",
            "Run every action they suggest",
            "Suppress approval requests"
          ],
          "answer": 0,
          "explanation": "Retrieved content does not grant permissions or alter approved behavior."
        },
        {
          "prompt": "What distinguishes schema validation from authorization?",
          "choices": [
            "They are identical",
            "Schema checks structure and authorization checks whether the action is allowed",
            "Schema checks account balances",
            "Authorization checks spelling only"
          ],
          "answer": 1,
          "explanation": "Correctly shaped input can still request an unauthorized action."
        },
        {
          "prompt": "What belongs in an agent evaluation set?",
          "choices": [
            "Only the shortest queries",
            "Only success cases",
            "Normal, conflicting, missing, and invalid cases",
            "Only model response times"
          ],
          "answer": 2,
          "explanation": "Edge cases test the flow's decisions and guardrails."
        },
        {
          "prompt": "What is a reasonable next step after a reviewer rejects a send action?",
          "choices": [
            "Send a shorter message",
            "Send it from another tool",
            "Delete the audit entry",
            "Record the rejection and perform no send"
          ],
          "answer": 3,
          "explanation": "A rejected approval prevents the proposed external action."
        }
      ],
      "track": "BQ-023 · Agentic AI",
      "summary": "Prototype an enrollment FAQ assistant with controlled tools, human approval, and clear test cases.",
      "lab": {
        "title": "Enrollment assistant simulation",
        "points": [
          "Sketch states for Receive, Look up, Verify, Draft, and Review. Add a stop rule and a missing-source branch.",
          "Specify the search tool and its input and output fields. Keep sending and record changes outside the prototype.",
          "Walk through six cases: known question, paraphrase, missing fact, conflicting facts, invalid tool input, and suspicious instructions in retrieved text.",
          "Record the expected route and actual route for each case. Present one improvement and retest its original failure."
        ],
        "example": "Build a read-only classroom simulation from three fictional entries covering schedule, materials, and class location. The prototype can be a paper flow or code using local data.",
        "deliverable": "Submit the workflow, tool schema, and six-case evaluation. Verify that every external action would require human approval."
      }
    }
  ],
  "final": [
    {
      "prompt": "Excel uses a fixed pass threshold in H2. Which reference stays anchored when the formula is copied?",
      "choices": [
        "H2",
        "H$2:$H5",
        "$H$2",
        "H3"
      ],
      "answer": 2,
      "explanation": "Both dollar signs keep the row and column fixed."
    },
    {
      "prompt": "You must share a readable report and preserve the editable original. Which pair meets both needs?",
      "choices": [
        "Original DOCX and exported PDF",
        "Two DOCX files renamed .pdf",
        "Only a picture of the title",
        "An empty folder and a chart"
      ],
      "answer": 0,
      "explanation": "The DOCX remains editable and the exported PDF preserves the report layout for reading."
    },
    {
      "prompt": "A client asks where to place a permanent contact form. Which content type fits best?",
      "choices": [
        "Dated update",
        "A stable Contact page",
        "A media caption",
        "A user profile"
      ],
      "answer": 1,
      "explanation": "Permanent reference material generally belongs on a page."
    },
    {
      "prompt": "A WordPress trainee can draft but should send work for approval. Which role fits?",
      "choices": [
        "Administrator",
        "Editor",
        "Author",
        "Contributor"
      ],
      "answer": 3,
      "explanation": "A Contributor can write posts for review without publishing them."
    },
    {
      "prompt": "The Full serving costs PKR 2,200 and delivery costs PKR 150. With no other charges, what should a test order show?",
      "choices": [
        "PKR 2,350",
        "PKR 2,150",
        "PKR 2,200",
        "PKR 2,500"
      ],
      "answer": 0,
      "explanation": "Adding the product price and delivery gives PKR 2,350."
    },
    {
      "prompt": "What should be tested again after changing checkout caching?",
      "choices": [
        "Only the logo",
        "Separate visitor carts and a full staging order",
        "Only the site title",
        "The number of menu links"
      ],
      "answer": 1,
      "explanation": "Shared caching must preserve each visitor's own checkout state."
    },
    {
      "prompt": "A campaign gets 18 verified inquiries from 450 landing-page visits. What is the conversion rate?",
      "choices": [
        "2.5%",
        "18%",
        "4%",
        "40%"
      ],
      "answer": 2,
      "explanation": "18 divided by 450 equals 0.04."
    },
    {
      "prompt": "Which outcome is strongest evidence that the campaign form is instrumented correctly?",
      "choices": [
        "The site loads fast",
        "The form has an attractive color",
        "A button gets hovered over",
        "A confirmed test submission creates exactly one expected event"
      ],
      "answer": 3,
      "explanation": "This verifies successful submission tracking and checks for duplicates."
    },
    {
      "prompt": "A service must be back within two hours. Which target does that specify?",
      "choices": [
        "RTO",
        "RPO",
        "Total log retention",
        "Password rotation"
      ],
      "answer": 0,
      "explanation": "RTO describes the target time to restore the service."
    },
    {
      "prompt": "An alert says a sign-in occurred in a new location. What should the incident record say first?",
      "choices": [
        "The attacker has been identified",
        "An unusual sign-in alert was recorded at a specific time",
        "All records have been stolen",
        "The alert should be deleted"
      ],
      "answer": 1,
      "explanation": "Record what was observed and verify the implications separately."
    },
    {
      "prompt": "With 4 true positives, 2 false positives, and 1 false negative, what is recall?",
      "choices": [
        "4/6",
        "2/5",
        "4/5",
        "1/4"
      ],
      "answer": 2,
      "explanation": "Recall uses actual positives, so it is 4 divided by 4 plus 1."
    },
    {
      "prompt": "A prediction dataset includes a field filled only after the outcome happened. What is the main concern?",
      "choices": [
        "The chart may need a different color",
        "The file extension has changed",
        "The dataset must be published",
        "The field may leak information about the target"
      ],
      "answer": 3,
      "explanation": "A feature unavailable at prediction time can make evaluation misleading."
    },
    {
      "prompt": "A FAQ answer quotes an old schedule while the current sheet gives a different time. What is the next step?",
      "choices": [
        "Flag the conflict and check which source is authoritative",
        "Average both times",
        "Use the longer answer",
        "Invent a compromise time"
      ],
      "answer": 0,
      "explanation": "The authoritative source must be established before giving a confirmed time."
    },
    {
      "prompt": "A policy changes frequently. Which design makes updated policy passages available as evidence?",
      "choices": [
        "Fine-tune every time a question arrives",
        "Retrieve from a maintained policy index",
        "Answer from model memory only",
        "Remove section IDs"
      ],
      "answer": 1,
      "explanation": "Retrieval can supply current source passages with identifiers."
    },
    {
      "prompt": "A read-only lookup returns text that asks the system to send an email. What should happen?",
      "choices": [
        "The text grants temporary permission",
        "The assistant sends a blank email instead",
        "Treat the text as data and keep the action behind approval",
        "Automatically create a new sending tool"
      ],
      "answer": 2,
      "explanation": "Data returned by a tool does not override the workflow or its authorization checks."
    },
    {
      "prompt": "A lookup request uses the right input format but asks for a restricted file. What is the correct tool behavior?",
      "choices": [
        "Return the file because the schema is valid",
        "Add the request to a public log",
        "Ask the model to ignore the restriction",
        "Reject access to the restricted file"
      ],
      "answer": 3,
      "explanation": "Authorization is required independently of schema validation."
    }
  ],
  "roadmap": [
    {
      "title": "BQ-001 · Digital Marketing Beginner",
      "lessons": [
        4
      ],
      "weeks": [
        "Introduction",
        "Funnels and personas",
        "Freelance profiles",
        "Content creation",
        "SEO foundations",
        "Keywords and audits",
        "Social media",
        "Campaign strategy",
        "Email marketing",
        "YouTube",
        "Portfolio",
        "Earning plan"
      ]
    },
    {
      "title": "BQ-005 · Cyber Security Fundamentals",
      "lessons": [
        5
      ],
      "weeks": [
        "Security fundamentals",
        "Threat and malware recognition",
        "Networks and account security",
        "Email and ethics",
        "OS and mobile security",
        "Web, cloud, and IoT defense",
        "Disaster recovery",
        "Assessment scope and defensive review",
        "Defensive practice",
        "Final project",
        "Freelance services",
        "Career planning"
      ]
    },
    {
      "title": "BQ-006 · Computer & IT Fundamentals",
      "lessons": [
        1
      ],
      "weeks": [
        "Computer basics",
        "Systems and files",
        "Word basics",
        "Word advanced",
        "Excel basics",
        "Formulas and features",
        "PowerPoint basics",
        "Advanced slides",
        "Internet and online safety",
        "Online productivity tools",
        "Digital careers",
        "Final project"
      ]
    },
    {
      "title": "BQ-007 · Web Development",
      "lessons": [
        2,
        3
      ],
      "weeks": [
        "WordPress setup",
        "Dashboard and content",
        "Themes and navigation",
        "Plugins and media",
        "Block editor and Elementor",
        "Roles and moderation",
        "Site security",
        "SEO and analytics",
        "WooCommerce products",
        "Store operations",
        "Performance",
        "Final project"
      ]
    },
    {
      "title": "BQ-023 · Agentic AI",
      "lessons": [
        6,
        8
      ],
      "weeks": [
        "AI foundations",
        "Python setup",
        "Logic and functions",
        "Data structures and OOP",
        "Data handling",
        "Machine learning",
        "NLP",
        "Agent fundamentals",
        "Multi-agent systems and retrieval",
        "Fine-tuning",
        "Agent capstone",
        "Career guidance"
      ]
    },
    {
      "title": "BQ-024 · Generative AI",
      "lessons": [
        6,
        7
      ],
      "weeks": [
        "Generative AI foundations",
        "Python setup",
        "Logic and functions",
        "Data structures and OOP",
        "Data handling",
        "Machine learning",
        "NLP",
        "Transformers and Hugging Face",
        "Multimodal AI",
        "Chatbots and retrieval",
        "Agents and fine-tuning",
        "Capstone and careers"
      ]
    }
  ]
};
