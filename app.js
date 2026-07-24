const roleDefinitions = {
  ceo: {
    label: 'مدیرعامل',
    access: {
      overview: 'full',
      finance: 'full',
      sales: 'full',
      commercial: 'full',
      hr: 'full',
      warehouse: 'full'
    }
  },
  financeManager: {
    label: 'مدیر مالی',
    access: {
      overview: 'full',
      finance: 'full',
      sales: 'view',
      commercial: 'view',
      hr: 'none',
      warehouse: 'none'
    }
  },
  hrManager: {
    label: 'مدیر منابع انسانی',
    access: {
      overview: 'full',
      finance: 'none',
      sales: 'none',
      commercial: 'none',
      hr: 'full',
      warehouse: 'none'
    }
  }
};

const sectionMeta = {
  overview: {
    key: 'overview',
    title: 'نمای کلی',
    subtitle: 'تصویر سریع از عملکرد مالی، فروش، عملیات و منابع انسانی',
    accent: '#4dba9d',
    icon: '◫'
  },
  finance: {
    key: 'finance',
    title: 'مالی',
    subtitle: 'کنترل جریان نقد، وصول، بدهی و حاشیه سود',
    accent: '#35c98a',
    icon: '₿'
  },
  sales: {
    key: 'sales',
    title: 'فروش',
    subtitle: 'پایش سفارش، رشد کانال‌ها و عملکرد نمایندگان',
    accent: '#4b9dff',
    icon: '↗'
  },
  commercial: {
    key: 'commercial',
    title: 'بازرگانی',
    subtitle: 'خرید، تأمین، قراردادها و سلامت سبد تأمین‌کنندگان',
    accent: '#7b7cff',
    icon: '◈'
  },
  hr: {
    key: 'hr',
    title: 'منابع انسانی',
    subtitle: 'حفظ نیرو، جذب، آموزش و بهره‌وری سازمانی',
    accent: '#a56eff',
    icon: '☰'
  },
  warehouse: {
    key: 'warehouse',
    title: 'انبار',
    subtitle: 'موجودی، انقضا، سرعت گردش و دقت ارسال',
    accent: '#ff9f43',
    icon: '⌂'
  }
};

const dashboardData = {
  overview: {
    headerStats: [
      { label: 'نرخ تحقق برنامه', value: '۹۴٪' },
      { label: 'رشد ماهانه', value: '+۱۲٪' },
      { label: 'کیفیت خدمت', value: '۹۶٫۸٪' }
    ],
    kpis: [
      { label: 'فروش خالص ماه', value: 128400000000, format: 'currency', short: '128.4', suffix: 'میلیارد ریال', trend: 'up', trendText: '۸.۴٪ نسبت به ماه قبل', hint: 'ترکیب فروش ۶ کانال توزیع', icon: '◔' },
      { label: 'حاشیه سود ناخالص', value: 23.6, format: 'percent', suffix: '%', trend: 'up', trendText: '۱.۸ واحد درصد', hint: 'بهبود در ترکیب محصول', icon: '◎' },
      { label: 'روزهای وصول مطالبات', value: 41, format: 'number', suffix: 'روز', trend: 'down', trendText: '۳ روز بهتر', hint: 'سرعت گردش وجه نقد', icon: '◷' },
      { label: 'تحویل به‌موقع', value: 96.8, format: 'percent', suffix: '%', trend: 'up', trendText: '۱.۱٪ رشد', hint: 'سفارش‌های ارسال‌شده در SLA', icon: '◌' }
    ],
    charts: [
      {
        id: 'overview-sales-line',
        title: 'روند فروش و سود ناخالص',
        subtitle: '۶ ماه اخیر',
        type: 'line',
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          { label: 'فروش (میلیارد ریال)', data: [94, 101, 97, 112, 119, 128], role: 'primary' },
          { label: 'سود ناخالص (میلیارد ریال)', data: [19, 21, 20, 24, 27, 30], role: 'secondary' }
        ]
      },
      {
        id: 'overview-channels-donut',
        title: 'ترکیب کانال‌های فروش',
        subtitle: 'سهم از فروش جاری',
        type: 'doughnut',
        labels: ['داروخانه مستقل', 'بیمارستان', 'زنجیره‌ای', 'پخش منطقه‌ای'],
        datasets: [{ label: 'سهم', data: [36, 24, 21, 19], role: 'multi' }]
      }
    ],
    tables: [
      {
        title: 'شاخص‌های مهم عملیاتی',
        subtitle: 'خلاصه وضعیت بین‌واحدی',
        columns: ['شاخص', 'مقدار', 'هدف', 'وضعیت'],
        rows: [
          { 'شاخص': 'وصول به‌موقع', 'مقدار': '۹۱٪', 'هدف': '۹۰٪', 'وضعیت': { text: 'مطلوب', tone: 'success' } },
          { 'شاخص': 'سفارش معوق', 'مقدار': '۳.۷٪', 'هدف': '< ۴٪', 'وضعیت': { text: 'کنترل‌شده', tone: 'info' } },
          { 'شاخص': 'نرخ بازگشت کالا', 'مقدار': '۱.۴٪', 'هدف': '< ۱٪', 'وضعیت': { text: 'نیازمند بررسی', tone: 'warning' } },
          { 'شاخص': 'دقت موجودی', 'مقدار': '۹۸٫۳٪', 'هدف': '۹۸٪', 'وضعیت': { text: 'مطلوب', tone: 'success' } }
        ]
      }
    ]
  },
  finance: {
    headerStats: [
      { label: 'نقدینگی آزاد', value: '۳۲٫۸ میلیارد ریال' },
      { label: 'نسبت جاری', value: '۱٫۳۸' },
      { label: 'وصول سررسیدشده', value: '۸۸٪' }
    ],
    kpis: [
      { label: 'دریافتی این ماه', value: 74200000000, format: 'currency', short: '74.2', suffix: 'میلیارد ریال', trend: 'up', trendText: '۹٪ رشد', hint: 'ترکیب نقد و اعتباری', icon: '◫' },
      { label: 'بدهی سررسیدشده', value: 18400000000, format: 'currency', short: '18.4', suffix: 'میلیارد ریال', trend: 'down', trendText: '۶٪ کاهش', hint: 'کنترل پرداخت‌های باز', icon: '◪' },
      { label: 'حاشیه EBITDA', value: 17.4, format: 'percent', suffix: '%', trend: 'up', trendText: '۱.۲٪ بهتر', hint: 'بهبود بهره‌وری هزینه‌ای', icon: '◩' },
      { label: 'نسبت وصول', value: 88, format: 'percent', suffix: '%', trend: 'up', trendText: '۲٪ رشد', hint: 'میزان تسویه فاکتورها', icon: '◧' }
    ],
    charts: [
      {
        id: 'finance-cash-bar',
        title: 'جریان نقد ورودی و خروجی',
        subtitle: 'میلیارد ریال',
        type: 'bar',
        labels: ['هفته ۱', 'هفته ۲', 'هفته ۳', 'هفته ۴'],
        datasets: [
          { label: 'ورودی', data: [16, 18, 20, 22], role: 'primary' },
          { label: 'خروجی', data: [11, 13, 12, 14], role: 'danger' }
        ]
      },
      {
        id: 'finance-aging-scatter',
        title: 'پراکندگی مانده مطالبات',
        subtitle: 'روز سررسید در برابر مبلغ',
        type: 'scatter',
        datasets: [
          {
            label: 'فاکتورهای باز',
            role: 'primary',
            data: [
              { x: 12, y: 420 }, { x: 18, y: 530 }, { x: 24, y: 610 }, { x: 33, y: 700 },
              { x: 39, y: 780 }, { x: 45, y: 950 }, { x: 52, y: 1040 }, { x: 61, y: 1180 }
            ]
          }
        ]
      }
    ],
    tables: [
      {
        title: 'وضعیت حساب‌ها',
        subtitle: 'نمونه دادهٔ ساختگی',
        columns: ['ردیف', 'حساب', 'مانده', 'سررسید', 'وضعیت'],
        rows: [
          { 'ردیف': '۱', 'حساب': 'مشتری الف', 'مانده': '۲٫۸ میلیارد ریال', 'سررسید': '۱۴ روز', 'وضعیت': { text: 'سالم', tone: 'success' } },
          { 'ردیف': '۲', 'حساب': 'مشتری ب', 'مانده': '۱٫۹ میلیارد ریال', 'سررسید': '۲۹ روز', 'وضعیت': { text: 'پیگیری', tone: 'warning' } },
          { 'ردیف': '۳', 'حساب': 'مشتری ج', 'مانده': '۳٫۱ میلیارد ریال', 'سررسید': '۵۱ روز', 'وضعیت': { text: 'پرریسک', tone: 'danger' } },
          { 'ردیف': '۴', 'حساب': 'مشتری د', 'مانده': '۱٫۲ میلیارد ریال', 'سررسید': '۱۰ روز', 'وضعیت': { text: 'سالم', tone: 'success' } }
        ]
      }
    ]
  },
  sales: {
    headerStats: [
      { label: 'سفارش روز', value: '۱,۳۴۸' },
      { label: 'میانگین ارزش سفارش', value: '۹۵ میلیون ریال' },
      { label: 'نرخ تبدیل', value: '۳۱٪' }
    ],
    kpis: [
      { label: 'فروش روزانه', value: 4300000000, format: 'currency', short: '4.3', suffix: 'میلیارد ریال', trend: 'up', trendText: '۷٪ رشد', hint: 'میانگین ۷ روز اخیر', icon: '◖' },
      { label: 'سفارش ثبت‌شده', value: 1348, format: 'number', suffix: 'سفارش', trend: 'up', trendText: '۱۲٪ رشد', hint: 'همه کانال‌ها', icon: '◗' },
      { label: 'نرخ تبدیل مشتری', value: 31, format: 'percent', suffix: '%', trend: 'up', trendText: '۲٪ افزایش', hint: 'از فرصت به سفارش', icon: '◙' },
      { label: 'میانگین مرجوعی', value: 1.8, format: 'percent', suffix: '%', trend: 'down', trendText: '۰.۴٪ کمتر', hint: 'کاهش نوسان در ارسال', icon: '◚' }
    ],
    charts: [
      {
        id: 'sales-trend-line',
        title: 'روند فروش هفتگی',
        subtitle: 'میلیارد ریال',
        type: 'line',
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        datasets: [
          { label: 'فروش', data: [3.6, 3.9, 4.1, 4.0, 4.2, 4.5, 4.3], role: 'primary' },
          { label: 'هدف', data: [3.5, 3.7, 3.8, 3.9, 4.0, 4.2, 4.2], role: 'secondary' }
        ]
      },
      {
        id: 'sales-region-bar',
        title: 'فروش به تفکیک منطقه',
        subtitle: 'میلیارد ریال',
        type: 'bar',
        labels: ['تهران', 'شمال', 'جنوب', 'مرکز', 'غرب'],
        datasets: [{ label: 'فروش', data: [22, 14, 11, 16, 13], role: 'primary' }]
      }
    ],
    tables: [
      {
        title: 'کانال‌های فروش',
        subtitle: 'عملکرد امروز',
        columns: ['کانال', 'سفارش', 'ارزش', 'وضعیت'],
        rows: [
          { 'کانال': 'داروخانه مستقل', 'سفارش': '۵۳۶', 'ارزش': '۱٫۶ میلیارد ریال', 'وضعیت': { text: 'فعال', tone: 'success' } },
          { 'کانال': 'بیمارستان', 'سفارش': '۲۴۱', 'ارزش': '۹۴۰ میلیون ریال', 'وضعیت': { text: 'پایدار', tone: 'info' } },
          { 'کانال': 'زنجیره‌ای', 'سفارش': '۳۱۷', 'ارزش': '۱٫۱ میلیارد ریال', 'وضعیت': { text: 'رشد بالا', tone: 'success' } },
          { 'کانال': 'پخش منطقه‌ای', 'سفارش': '۲۵۴', 'ارزش': '۶۶۰ میلیون ریال', 'وضعیت': { text: 'نیازمند پیگیری', tone: 'warning' } }
        ]
      }
    ]
  },
  commercial: {
    headerStats: [
      { label: 'تأمین‌کننده فعال', value: '۵۴' },
      { label: 'درصد تحویل به‌موقع', value: '۹۲٪' },
      { label: 'قرارداد باز', value: '۱۸' }
    ],
    kpis: [
      { label: 'سفارش خرید باز', value: 182, format: 'number', suffix: 'سفارش', trend: 'down', trendText: '۵ سفارش کمتر', hint: 'کاهش صف خرید', icon: '◯' },
      { label: 'تأمین به‌موقع', value: 92, format: 'percent', suffix: '%', trend: 'up', trendText: '۳٪ بهتر', hint: 'عملکرد تأمین‌کنندگان', icon: '◲' },
      { label: 'انحراف قیمت خرید', value: 2.3, format: 'percent', suffix: '%', trend: 'down', trendText: '۰.۸٪ کمتر', hint: 'کنترل هزینه خرید', icon: '◱' },
      { label: 'کالاهای بحرانی', value: 11, format: 'number', suffix: 'آیتم', trend: 'down', trendText: '۲ مورد کمتر', hint: 'نیازمند تسریع تأمین', icon: '◳' }
    ],
    charts: [
      {
        id: 'commercial-suppliers-donut',
        title: 'کیفیت سبد تأمین‌کنندگان',
        subtitle: 'تقسیم‌بندی بر اساس SLA',
        type: 'doughnut',
        labels: ['عالی', 'قابل قبول', 'پرریسک'],
        datasets: [{ label: 'تعداد', data: [28, 19, 7], role: 'multi' }]
      },
      {
        id: 'commercial-procurement-line',
        title: 'روند خرید ماهانه',
        subtitle: 'میلیارد ریال',
        type: 'line',
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          { label: 'خرید قطعی', data: [24, 21, 26, 29, 27, 31], role: 'primary' },
          { label: 'بودجه', data: [22, 22, 24, 26, 26, 29], role: 'secondary' }
        ]
      }
    ],
    tables: [
      {
        title: 'قراردادهای در جریان',
        subtitle: 'خلاصه وضعیت تأمین',
        columns: ['قرارداد', 'تأمین‌کننده', 'ارزش', 'وضعیت'],
        rows: [
          { 'قرارداد': 'COM-101', 'تأمین‌کننده': 'تأمین‌گر آلفا', 'ارزش': '۴٫۲ میلیارد ریال', 'وضعیت': { text: 'جاری', tone: 'success' } },
          { 'قرارداد': 'COM-108', 'تأمین‌کننده': 'بهین دارو', 'ارزش': '۲٫۱ میلیارد ریال', 'وضعیت': { text: 'مذاکره', tone: 'warning' } },
          { 'قرارداد': 'COM-115', 'تأمین‌کننده': 'شفا تجهیز', 'ارزش': '۳٫۴ میلیارد ریال', 'وضعیت': { text: 'تاخیر', tone: 'danger' } },
          { 'قرارداد': 'COM-119', 'تأمین‌کننده': 'پارس لاین', 'ارزش': '۱٫۷ میلیارد ریال', 'وضعیت': { text: 'جاری', tone: 'success' } }
        ]
      }
    ]
  },
  hr: {
    headerStats: [
      { label: 'تعداد کارکنان', value: '۴۸۶' },
      { label: 'نرخ ماندگاری', value: '۹۳٪' },
      { label: 'ساعات آموزش', value: '۸۹۰' }
    ],
    kpis: [
      { label: 'نرخ نگهداشت', value: 93, format: 'percent', suffix: '%', trend: 'up', trendText: '۱.۴٪ بهبود', hint: 'نسبت ماندگاری ۱۲ ماهه', icon: '◍' },
      { label: 'استخدام باز', value: 14, format: 'number', suffix: 'موقعیت', trend: 'down', trendText: '۳ موقعیت کمتر', hint: 'فرصت‌های فعال جذب', icon: '◉' },
      { label: 'میانگین رضایت', value: 4.4, format: 'number', suffix: 'از ۵', trend: 'up', trendText: '۰.۲ افزایش', hint: 'نظرسنجی داخلی', icon: '◌' },
      { label: 'ساعات آموزش', value: 890, format: 'number', suffix: 'ساعت', trend: 'up', trendText: '۱۵٪ رشد', hint: 'آموزش تخصصی و الزامی', icon: '◐' }
    ],
    charts: [
      {
        id: 'hr-retention-line',
        title: 'روند نگهداشت و جذب',
        subtitle: 'درصد / تعداد',
        type: 'line',
        labels: ['فصل ۱', 'فصل ۲', 'فصل ۳', 'فصل ۴'],
        datasets: [
          { label: 'نرخ نگهداشت', data: [89, 90, 92, 93], role: 'primary' },
          { label: 'تعداد جذب', data: [22, 18, 15, 14], role: 'secondary' }
        ]
      },
      {
        id: 'hr-department-bar',
        title: 'سرانه آموزش به تفکیک واحد',
        subtitle: 'ساعت',
        type: 'bar',
        labels: ['فروش', 'مالی', 'بازرگانی', 'منابع انسانی', 'انبار'],
        datasets: [{ label: 'ساعات آموزش', data: [180, 110, 140, 220, 240], role: 'primary' }]
      }
    ],
    tables: [
      {
        title: 'وضعیت تیم‌ها',
        subtitle: 'نمونه شاخص‌های منابع انسانی',
        columns: ['واحد', 'تعداد نیرو', 'میانگین رضایت', 'وضعیت'],
        rows: [
          { 'واحد': 'فروش', 'تعداد نیرو': '۱۳۶', 'میانگین رضایت': '۴٫۲', 'وضعیت': { text: 'پایدار', tone: 'info' } },
          { 'واحد': 'مالی', 'تعداد نیرو': '۴۸', 'میانگین رضایت': '۴٫۵', 'وضعیت': { text: 'عالی', tone: 'success' } },
          { 'واحد': 'بازرگانی', 'تعداد نیرو': '۵۷', 'میانگین رضایت': '۴٫۳', 'وضعیت': { text: 'خوب', tone: 'success' } },
          { 'واحد': 'انبار', 'تعداد نیرو': '۹۶', 'میانگین رضایت': '۳٫۸', 'وضعیت': { text: 'نیازمند توجه', tone: 'warning' } }
        ]
      }
    ]
  },
  warehouse: {
    headerStats: [
      { label: 'دقت موجودی', value: '۹۸٫۳٪' },
      { label: 'اقلام در خطر انقضا', value: '۲۴' },
      { label: 'سرعت ارسال', value: '۴٫۶ ساعت' }
    ],
    kpis: [
      { label: 'دقت موجودی', value: 98.3, format: 'percent', suffix: '%', trend: 'up', trendText: '۰.۶٪ رشد', hint: 'هم‌خوانی شمارش با سیستم', icon: '◓' },
      { label: 'نرخ خطای ارسال', value: 0.7, format: 'percent', suffix: '%', trend: 'down', trendText: '۰.۲٪ کاهش', hint: 'اشتباه در اقلام سفارش', icon: '◒' },
      { label: 'گردش موجودی', value: 8.9, format: 'number', suffix: 'بار', trend: 'up', trendText: '۰.۹ بهتر', hint: 'چرخش سبد کالا', icon: '◑' },
      { label: 'کالای نزدیک انقضا', value: 24, format: 'number', suffix: 'آیتم', trend: 'down', trendText: '۵ آیتم کمتر', hint: 'نیازمند اقدام سریع', icon: '◐' }
    ],
    charts: [
      {
        id: 'warehouse-stock-bar',
        title: 'موجودی اقلام منتخب',
        subtitle: 'هزار واحد',
        type: 'bar',
        labels: ['آنتی‌بیوتیک', 'مسکن', 'سرم', 'ویتامین', 'آنتی‌هیستامین'],
        datasets: [{ label: 'موجودی', data: [44, 62, 38, 57, 46], role: 'primary' }]
      },
      {
        id: 'warehouse-expiry-donut',
        title: 'تقسیم‌بندی موجودی بر اساس انقضا',
        subtitle: 'درصد سبد',
        type: 'doughnut',
        labels: ['بیش از ۹ ماه', 'بین ۶ تا ۹ ماه', 'کمتر از ۶ ماه'],
        datasets: [{ label: 'سهم', data: [58, 27, 15], role: 'multi' }]
      }
    ],
    tables: [
      {
        title: 'وضعیت عملیات انبار',
        subtitle: 'خلاصه اجرای روزانه',
        columns: ['فرآیند', 'مقدار', 'هدف', 'وضعیت'],
        rows: [
          { 'فرآیند': 'سفارش پردازش‌شده', 'مقدار': '۱,۱۸۰', 'هدف': '۱,۱۵۰', 'وضعیت': { text: 'مطلوب', tone: 'success' } },
          { 'فرآیند': 'ارسال دارای خطا', 'مقدار': '۸', 'هدف': '< ۱۰', 'وضعیت': { text: 'کنترل‌شده', tone: 'info' } },
          { 'فرآیند': 'کالای نزدیک انقضا', 'مقدار': '۲۴', 'هدف': '< ۲۰', 'وضعیت': { text: 'هشدار', tone: 'warning' } },
          { 'فرآیند': 'عدم انطباق موجودی', 'مقدار': '۳', 'هدف': '۰', 'وضعیت': { text: 'نیازمند اقدام', tone: 'danger' } }
        ]
      }
    ]
  }
};

const state = {
  role: 'ceo',
  theme: 'dark',
  section: 'overview',
  chartInstances: new Map()
};

const refs = {};

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', onHashChange);

function init() {
  refs.sidebarNav = document.getElementById('sidebarNav');
  refs.contentRoot = document.getElementById('contentRoot');
  refs.pageTitle = document.getElementById('pageTitle');
  refs.roleSelect = document.getElementById('roleSelect');
  refs.themeToggle = document.getElementById('themeToggle');
  refs.themeToggleLabel = document.getElementById('themeToggleLabel');
  refs.themeToggleIcon = document.getElementById('themeToggleIcon');
  refs.exportGroup = document.getElementById('exportGroup');
  refs.exportToggle = document.getElementById('exportToggle');
  refs.exportMenu = document.getElementById('exportMenu');
  refs.toastArea = document.createElement('div');
  refs.toastArea.className = 'toast-area';
  document.body.appendChild(refs.toastArea);

  state.theme = localStorage.getItem('demo-dashboard-theme') || 'dark';
  state.role = localStorage.getItem('demo-dashboard-role') || 'ceo';
  refs.roleSelect.value = state.role;

  refs.roleSelect.addEventListener('change', (event) => {
    state.role = event.target.value;
    localStorage.setItem('demo-dashboard-role', state.role);
    renderSidebar();
    renderCurrentSection();
    showToast(`نقش «${roleDefinitions[state.role].label}» فعال شد.`, 'success');
  });

  refs.themeToggle.addEventListener('click', toggleTheme);
  refs.exportToggle.addEventListener('click', toggleExportMenu);

  refs.exportMenu.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-export]');
    if (!button || button.disabled) return;
    closeExportMenu();
    await handleExport(button.dataset.export);
  });

  document.addEventListener('click', (event) => {
    if (!refs.exportGroup.contains(event.target)) {
      closeExportMenu();
    }
  });

  applyTheme();
  onHashChange();
}

function onHashChange() {
  const rawHash = window.location.hash.replace('#', '').trim();
  state.section = sectionMeta[rawHash] ? rawHash : 'overview';
  if (!window.location.hash) {
    window.location.hash = '#overview';
    return;
  }
  renderSidebar();
  renderCurrentSection();
}

function renderSidebar() {
  const visibleSections = Object.values(sectionMeta).filter((section) => getAccessForSection(section.key) !== 'none');

  refs.sidebarNav.innerHTML = visibleSections.map((section) => {
    const access = getAccessForSection(section.key);
    const isActive = state.section === section.key;
    const statusText = access === 'view' ? 'فقط مشاهده' : 'دسترسی کامل';
    return `
      <button class="nav-item ${isActive ? 'nav-item--active' : ''}" type="button" data-section="${section.key}" style="--section-accent:${section.accent}">
        <span class="nav-item__content">
          <span class="nav-item__icon">${section.icon}</span>
          <span class="nav-item__label">
            <strong>${section.title}</strong>
            <span>${statusText}</span>
          </span>
        </span>
        <span class="nav-item__arrow">${access === 'view' ? '👁️' : '‹'}</span>
      </button>
    `;
  }).join('');

  refs.sidebarNav.querySelectorAll('[data-section]').forEach((button) => {
    button.addEventListener('click', () => {
      window.location.hash = `#${button.dataset.section}`;
    });
  });
}

function renderCurrentSection() {
  destroyCharts();
  const section = sectionMeta[state.section];
  const access = getAccessForSection(state.section);

  refs.pageTitle.textContent = section.title;
  document.documentElement.style.setProperty('--section-accent', section.accent);

  if (access === 'none') {
    refs.contentRoot.innerHTML = renderAccessDenied(section);
    updateExportAvailability();
    return;
  }

  refs.contentRoot.innerHTML = renderSectionMarkup(section, dashboardData[state.section], access);
  updateExportAvailability();
  animateCounters();
  renderChartsForSection();
}

function renderAccessDenied(section) {
  return `
    <section class="access-denied section-view">
      <div class="access-denied__icon">🔒</div>
      <h3>دسترسی محدود</h3>
      <p>نقش فعلی شما اجازهٔ مشاهدهٔ بخش «${section.title}» را ندارد.</p>
      <div style="margin-top:16px; display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
        <button class="btn btn--primary" type="button" onclick="window.location.hash='#overview'">بازگشت به نمای کلی</button>
      </div>
    </section>
  `;
}

function renderSectionMarkup(section, data, access) {
  const notice = access === 'view'
    ? `
      <div class="notice-bar">
        <div>
          <strong>حالت فقط مشاهده</strong>
          <span>برای این نقش، مشاهدهٔ این بخش مجاز است اما خروجی‌گیری از جزئیات حساس غیرفعال شده است.</span>
        </div>
        <span class="badge badge--warning">فقط مشاهده</span>
      </div>`
    : '';

  return `
    <section class="section-view" data-current-section="${section.key}" style="--section-accent:${section.accent}">
      <div class="section-header">
        <div class="section-header__text">
          <span class="section-pill"><span>${section.icon}</span><span>${section.title}</span></span>
          <h3 style="margin-top:10px;">${section.subtitle}</h3>
          <p class="section-header__meta" style="margin-top:8px;">تمام داده‌ها ساختگی و مناسب نسخهٔ نمایشی هستند.</p>
        </div>
        <div class="section-header__stats">
          ${data.headerStats.map((item) => `<div><p>${item.label}</p><strong>${item.value}</strong></div>`).join('')}
        </div>
      </div>

      ${notice}

      <div class="kpi-grid">
        ${data.kpis.map((item, index) => renderKpiCard(item, index, section.accent)).join('')}
      </div>

      <div class="chart-grid">
        ${data.charts.map((chart) => renderChartCard(chart)).join('')}
      </div>

      <div class="table-grid">
        ${data.tables.map((table) => renderTableCard(table)).join('')}
      </div>
    </section>
  `;
}

function renderKpiCard(item, index, accent) {
  const trendClass = item.trend === 'up' ? 'kpi__trend--up' : 'kpi__trend--down';
  const trendIcon = item.trend === 'up' ? '▲' : '▼';
  const targetValue = item.format === 'currency' ? Number(item.short || 0) : Number(item.value);
  return `
    <article class="kpi-card" style="--section-accent:${accent}; animation: fadeIn 360ms ease ${index * 70}ms both;">
      <div class="kpi__label">
        <span>${item.label}</span>
        <span class="kpi__icon">${item.icon}</span>
      </div>
      <div class="kpi__value" data-countup="${targetValue}" data-format="${item.format}" data-suffix="${item.suffix || ''}">۰</div>
      <div class="kpi__trend ${trendClass}">${trendIcon}<span>${item.trendText}</span></div>
      <p class="kpi__hint" style="margin-top:12px;">${item.hint}</p>
    </article>
  `;
}

function renderChartCard(chart) {
  return `
    <article class="chart-card">
      <div class="chart-card__header">
        <div>
          <h4>${chart.title}</h4>
          <p>${chart.subtitle}</p>
        </div>
        <span class="badge badge--info">${chartTypeLabel(chart.type)}</span>
      </div>
      <div class="chart-card__canvas-wrap" data-chart-wrap="${chart.id}">
        <canvas id="${chart.id}" aria-label="${chart.title}" role="img"></canvas>
      </div>
    </article>
  `;
}

function renderTableCard(table) {
  return `
    <article class="data-card">
      <div class="data-card__header">
        <div>
          <h4>${table.title}</h4>
          <p>${table.subtitle}</p>
        </div>
        <span class="badge badge--info">جدول داده</span>
      </div>
      <div class="table-wrap">${renderTable(table)}</div>
    </article>
  `;
}

function renderTable(table) {
  return `
    <table class="data-table">
      <thead>
        <tr>${table.columns.map((column) => `<th>${column}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${table.rows.map((row) => `
          <tr>
            ${table.columns.map((column) => {
              const value = row[column];
              if (value && typeof value === 'object' && value.text) {
                return `<td><span class="badge badge--${value.tone}">${value.text}</span></td>`;
              }
              return `<td>${value}</td>`;
            }).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function animateCounters() {
  const items = refs.contentRoot.querySelectorAll('[data-countup]');
  items.forEach((element) => {
    const target = Number(element.dataset.countup || 0);
    const format = element.dataset.format;
    const suffix = element.dataset.suffix || '';
    const duration = 900;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      element.textContent = formatKpiValue(current, format, suffix);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatKpiValue(target, format, suffix);
      }
    }

    requestAnimationFrame(update);
  });
}

function formatKpiValue(value, format, suffix) {
  const persianNumber = new Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: value < 10 && format !== 'currency' ? 1 : 0,
    minimumFractionDigits: value < 10 && format === 'number' ? 1 : 0
  }).format(value);

  if (format === 'currency') {
    return `${persianNumber} ${suffix}`.trim();
  }
  if (format === 'percent') {
    return `${persianNumber}${suffix}`;
  }
  return `${persianNumber} ${suffix}`.trim();
}

function chartTypeLabel(type) {
  const labels = { line: 'خطی', bar: 'میله‌ای', doughnut: 'دونات', scatter: 'پراکندگی' };
  return labels[type] || type;
}

function getAccessForSection(sectionKey) {
  return roleDefinitions[state.role].access[sectionKey] || 'none';
}

function renderChartsForSection() {
  const charts = dashboardData[state.section].charts;
  charts.forEach((chart) => {
    createChartWithFallback(chart.id, buildChartConfig(chart));
  });
}

async function createChartWithFallback(canvasId, config) {
  const wrap = refs.contentRoot.querySelector(`[data-chart-wrap="${canvasId}"]`);
  const canvas = document.getElementById(canvasId);
  if (!wrap || !canvas) return;

  const chartReady = await ensureChartLibrary();
  if (!chartReady) {
    showChartError(wrap, canvasId, config);
    return;
  }

  try {
    const ctx = canvas.getContext('2d');
    const instance = new window.Chart(ctx, config);
    state.chartInstances.set(canvasId, instance);
  } catch (error) {
    console.error('Chart render failed:', error);
    showChartError(wrap, canvasId, config);
  }
}

function ensureChartLibrary() {
  if (window.Chart) return Promise.resolve(true);
  return new Promise((resolve) => {
    const existing = document.querySelector('script[data-chart-retry="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(Boolean(window.Chart)), { once: true });
      existing.addEventListener('error', () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = `vendor/chart.umd.min.js?retry=${Date.now()}`;
    script.dataset.chartRetry = 'true';
    script.onload = () => resolve(Boolean(window.Chart));
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function showChartError(wrap, canvasId, config) {
  const template = document.getElementById('chartErrorTemplate');
  wrap.innerHTML = template.innerHTML;
  const button = wrap.querySelector('.retry-chart-btn');
  button.addEventListener('click', () => {
    wrap.innerHTML = `<canvas id="${canvasId}" aria-label="chart" role="img"></canvas>`;
    createChartWithFallback(canvasId, config);
  });
}

function buildChartConfig(chart) {
  const computed = getComputedStyle(document.body);
  const textColor = computed.getPropertyValue('--text').trim();
  const softColor = computed.getPropertyValue('--text-soft').trim();
  const borderColor = computed.getPropertyValue('--border').trim();
  const accent = sectionMeta[state.section].accent;

  const palette = {
    primary: accent,
    secondary: computed.getPropertyValue('--brand-2').trim() || '#4b9dff',
    danger: computed.getPropertyValue('--danger').trim(),
    success: computed.getPropertyValue('--success').trim(),
    warning: computed.getPropertyValue('--warning').trim(),
    info: computed.getPropertyValue('--info').trim(),
    multi: [accent, '#4b9dff', '#a56eff', '#ff9f43', '#35c98a']
  };

  const datasets = chart.datasets.map((dataset, index) => {
    if (chart.type === 'doughnut') {
      return {
        ...dataset,
        backgroundColor: palette.multi,
        borderColor: computed.getPropertyValue('--surface-strong').trim(),
        borderWidth: 4,
        hoverOffset: 8
      };
    }

    if (chart.type === 'scatter') {
      return {
        ...dataset,
        pointRadius: 6,
        pointHoverRadius: 7,
        backgroundColor: palette[dataset.role] || palette.primary,
        borderColor: palette[dataset.role] || palette.primary
      };
    }

    if (chart.type === 'bar') {
      return {
        ...dataset,
        borderRadius: 12,
        backgroundColor: alphaColor(palette[dataset.role] || palette.primary, 0.78),
        borderColor: palette[dataset.role] || palette.primary,
        borderWidth: 1.5,
        maxBarThickness: 38
      };
    }

    return {
      ...dataset,
      borderColor: palette[dataset.role] || palette.primary,
      backgroundColor: alphaColor(palette[dataset.role] || palette.primary, index === 0 ? 0.18 : 0.1),
      pointBackgroundColor: palette[dataset.role] || palette.primary,
      pointBorderColor: '#ffffff',
      tension: 0.38,
      fill: index === 0,
      borderWidth: 3,
      pointRadius: 4,
      pointHoverRadius: 6
    };
  });

  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: textColor,
          usePointStyle: true,
          padding: 18,
          font: { family: 'Vazirmatn' }
        }
      },
      tooltip: {
        rtl: true,
        titleFont: { family: 'Vazirmatn' },
        bodyFont: { family: 'Vazirmatn' }
      }
    }
  };

  if (chart.type === 'doughnut') {
    return {
      type: chart.type,
      data: { labels: chart.labels, datasets },
      options: {
        ...baseOptions,
        cutout: '66%'
      }
    };
  }

  return {
    type: chart.type,
    data: { labels: chart.labels, datasets },
    options: {
      ...baseOptions,
      scales: {
        x: {
          ticks: { color: softColor, font: { family: 'Vazirmatn' } },
          grid: { display: chart.type === 'scatter' ? true : false, color: alphaColor(borderColor, 0.4) }
        },
        y: {
          ticks: { color: softColor, font: { family: 'Vazirmatn' } },
          grid: { color: alphaColor(borderColor, 0.55) }
        }
      }
    }
  };
}

function alphaColor(color, alpha) {
  if (color.startsWith('rgba')) return color;
  if (color.startsWith('#')) {
    const clean = color.replace('#', '');
    const normalized = clean.length === 3 ? clean.split('').map((ch) => ch + ch).join('') : clean;
    const bigint = parseInt(normalized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color;
}

function destroyCharts() {
  state.chartInstances.forEach((instance) => instance.destroy());
  state.chartInstances.clear();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('demo-dashboard-theme', state.theme);
  applyTheme();
  renderCurrentSection();
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  refs.themeToggleIcon.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  refs.themeToggleLabel.textContent = state.theme === 'dark' ? 'حالت روشن' : 'حالت تیره';
}

function toggleExportMenu() {
  refs.exportGroup.classList.toggle('export-group--open');
  refs.exportToggle.setAttribute('aria-expanded', refs.exportGroup.classList.contains('export-group--open') ? 'true' : 'false');
}

function closeExportMenu() {
  refs.exportGroup.classList.remove('export-group--open');
  refs.exportToggle.setAttribute('aria-expanded', 'false');
}

function updateExportAvailability() {
  const canExport = getAccessForSection(state.section) === 'full';
  refs.exportMenu.querySelectorAll('[data-export]').forEach((button) => {
    button.disabled = !canExport;
    button.title = canExport ? '' : 'در این نقش، خروجی‌گیری برای این بخش غیرفعال است.';
  });
}

async function handleExport(type) {
  if (getAccessForSection(state.section) !== 'full') {
    showToast('برای نقش فعلی، خروجی‌گیری این بخش مجاز نیست.', 'warning');
    return;
  }

  switch (type) {
    case 'xlsx':
      exportCurrentSectionToXlsx();
      break;
    case 'docx':
      exportCurrentSectionToDocx();
      break;
    case 'pdf':
      await exportCurrentSectionToPdf();
      break;
    case 'email':
      exportCurrentSectionToEmail();
      break;
    case 'print':
      window.print();
      break;
    default:
      break;
  }
}

function exportCurrentSectionToXlsx() {
  if (!window.XLSX) {
    showToast('کتابخانهٔ اکسل در دسترس نیست.', 'danger');
    return;
  }

  const section = sectionMeta[state.section];
  const data = dashboardData[state.section];
  const workbook = window.XLSX.utils.book_new();

  const kpiRows = [
    ['بخش', section.title],
    ['نقش کاربر', roleDefinitions[state.role].label],
    [],
    ['شاخص', 'مقدار', 'روند', 'توضیح']
  ];

  data.kpis.forEach((item) => {
    kpiRows.push([
      item.label,
      formatKpiValue(item.format === 'currency' ? Number(item.short || 0) : Number(item.value), item.format, item.suffix || ''),
      item.trendText,
      item.hint
    ]);
  });

  const kpiSheet = window.XLSX.utils.aoa_to_sheet(kpiRows);
  kpiSheet['!cols'] = [{ wch: 24 }, { wch: 18 }, { wch: 24 }, { wch: 28 }];
  window.XLSX.utils.book_append_sheet(workbook, kpiSheet, 'KPI');

  data.tables.forEach((table, index) => {
    const rows = [table.columns];
    table.rows.forEach((row) => {
      rows.push(table.columns.map((column) => {
        const cell = row[column];
        return cell && typeof cell === 'object' ? cell.text : cell;
      }));
    });
    const sheet = window.XLSX.utils.aoa_to_sheet(rows);
    sheet['!cols'] = table.columns.map(() => ({ wch: 20 }));
    window.XLSX.utils.book_append_sheet(workbook, sheet, `Table-${index + 1}`);
  });

  window.XLSX.writeFile(workbook, `dashboard-${state.section}.xlsx`);
  showToast('فایل اکسل بخش فعال دانلود شد.', 'success');
}

function exportCurrentSectionToDocx() {
  if (!window.htmlDocx) {
    showToast('کتابخانهٔ Word در دسترس نیست.', 'danger');
    return;
  }

  const section = sectionMeta[state.section];
  const data = dashboardData[state.section];
  const html = `
    <html dir="rtl" lang="fa">
      <head><meta charset="utf-8"><title>${section.title}</title></head>
      <body style="font-family: Vazirmatn, Tahoma, sans-serif; direction: rtl; padding: 24px;">
        <h1>${section.title}</h1>
        <p>${section.subtitle}</p>
        <h2>شاخص‌های کلیدی</h2>
        <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: right;">
          <tr><th>شاخص</th><th>مقدار</th><th>روند</th><th>توضیح</th></tr>
          ${data.kpis.map((item) => `
            <tr>
              <td>${item.label}</td>
              <td>${formatKpiValue(item.format === 'currency' ? Number(item.short || 0) : Number(item.value), item.format, item.suffix || '')}</td>
              <td>${item.trendText}</td>
              <td>${item.hint}</td>
            </tr>`).join('')}
        </table>
        ${data.tables.map((table) => `
          <h2 style="margin-top: 24px;">${table.title}</h2>
          <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: right;">
            <tr>${table.columns.map((column) => `<th>${column}</th>`).join('')}</tr>
            ${table.rows.map((row) => `
              <tr>
                ${table.columns.map((column) => {
                  const value = row[column];
                  return `<td>${value && typeof value === 'object' ? value.text : value}</td>`;
                }).join('')}
              </tr>`).join('')}
          </table>`).join('')}
      </body>
    </html>`;

  const blob = window.htmlDocx.asBlob(html);
  downloadBlob(blob, `dashboard-${state.section}.docx`);
  showToast('فایل Word بخش فعال آماده شد.', 'success');
}

async function exportCurrentSectionToPdf() {
  if (!window.html2canvas || !window.jspdf) {
    showToast('کتابخانهٔ PDF در دسترس نیست.', 'danger');
    return;
  }

  const target = refs.contentRoot.querySelector('[data-current-section]');
  if (!target) return;

  showToast('در حال آماده‌سازی PDF...', 'warning');
  const canvas = await window.html2canvas(target, { scale: 2, backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg-solid').trim() || '#ffffff' });
  const imgData = canvas.toDataURL('image/png');
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(`dashboard-${state.section}.pdf`);
  showToast('فایل PDF بخش فعال دانلود شد.', 'success');
}

function exportCurrentSectionToEmail() {
  const section = sectionMeta[state.section];
  const kpiLines = dashboardData[state.section].kpis.map((item) => {
    const value = formatKpiValue(item.format === 'currency' ? Number(item.short || 0) : Number(item.value), item.format, item.suffix || '');
    return `- ${item.label}: ${value} | ${item.trendText}`;
  }).join('%0D%0A');

  const subject = encodeURIComponent(`خلاصه بخش ${section.title}`);
  const body = encodeURIComponent(`سلام،%0D%0A%0D%0Aخلاصهٔ بخش ${section.title}:%0D%0A${kpiLines}%0D%0A%0D%0Aاین متن از نسخهٔ نمایشی داشبورد تهیه شده است.`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function showToast(message, tone = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${tone}`;
  toast.textContent = message;
  refs.toastArea.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}
