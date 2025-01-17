//Uncomment this line on creating a translation file
import { editorLocalization, defaultStrings } from "../editorLocalization";

var arabicStrings = {
  //survey templates
  survey: {
    edit: "تعديل",
    externalHelpLink: "شاهد وتعلم كيف يتم إنشاء إستبيان",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "الرجاء إفلات السؤال هنا من صندوق الأدوات",
    addLogicItem: ".قم بإنشاء قاعدة لتخصيص تدفق الإستبيان",
    copy: "نسخ",
    duplicate: "نسخة طبق الأصل",
    settings: "الإعدادات",
    addToToolbox: "إضافة إلى صندوق الأدوات",
    deletePanel: "حذف لوحة",
    deleteQuestion: "حذف سؤال",
    convertTo: "تحويل إلى",
    drag: "إسحب العنصر",
    license: "الرجاء شراء ترخيص مطور SurveyJS Creator لاستخدامه في تطبيقك"
  },
  //questionTypes
  qt: {
    default: "الإفتراضي",
    checkbox: "إختيار من متعدد",
    comment: "تعليق",
    imagepicker: "إنتقاء الصور",
    ranking: "تصنيف",
    image: "صورة",
    dropdown: "قائمة منسدلة",
    file: "ملف",
    html: "لغة ترميز النصوص HTML",
    matrix: "مصفوفة (إختيار واحد)",
    matrixdropdown: "مصفوفة (إختيار متعدد)",
    matrixdynamic: "مصفوفة (صفوف ديناميكية)",
    multipletext: "مدخل متعدد",
    panel: "لوحة",
    paneldynamic: "لوحة ديناميكية",
    radiogroup: "إختيار فردي",
    rating: "تقييم",
    text: "مٌدخل فردي",
    boolean: "قيمة منطقية",
    expression: "عملية حسابية (للقرائة فقط)",
    signaturepad: "لوحة توقيع",
    buttongroup: "Button group",
    flowpanel: "Flow Panel"
  },
  //Strings in SurveyJS Creator
  ed: {
    defaultLocale: "اللغة الافتراضية {0}",
    survey: "الاستبيان1",
    settings: "إعدادات الاستبيان",
    settingsTooltip: "فتح إعدادات الاستبيان",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "إظهار اللوحة",
    hidePanel: "إخفاء اللوحة",
    prevSelected: "اختر السابق",
    nextSelected: "اختر التالي",
    //editSurvey: "Edit Survey",
    surveyTypeName: "الإستبيان",
    pageTypeName: "الصفحة",
    panelTypeName: "اللوحة",
    questionTypeName: "السؤال",
    columnTypeName: "عمود",
    addNewPage: "إضافة صفحة جديدة",
    moveRight: "انتقل إلى اليمين",
    moveLeft: "انتقل إلى اليسار",
    deletePage: "حذف الصفحة",
    editPage: "تعديل الصفحة",
    edit: "التعديل",
    newPageName: "الصفحة",
    newQuestionName: "السؤال",
    newPanelName: "اللوحة",
    newTextItemName: "النص",
    testSurvey: "تجربة الاستبيان",
    testSurveyAgain: "اختبر الاستبيان مرة أخرى",
    testSurveyWidth: "عرض الاستبيان: ",
    navigateToMsg: "يجب عليك الانتقال الي: ",
    logic: "منطق الاستبيان",
    embedSurvey: "اربط الاستبيان",
    translation: "الترجمة",
    saveSurvey: "حفظ الاستبيان",
    saveSurveyTooltip: "حفظ الاستبيان",
    designer: "المصمم",
    jsonEditor: "محرر JSON",
    jsonHideErrors: "إخفاء الأخطاء",
    jsonShowErrors: "إظهار الأخطاء",
    undo: "تراجع",
    redo: "إعادة",
    undoTooltip: "راجع اخر تعديل",
    redoTooltip: "إعادة التغيير",
    copy: "نسخ",
    cut: "قص",
    paste: "لصق",
    copyTooltip: "نسخ المحدد إلى الحافظة",
    cutTooltip: "قص المحدد إلى الحافظة",
    pasteTooltip: "لصق من الحافظة",
    options: "الخيارات",
    generateValidJSON: "إنشاء JSON صالح",
    generateReadableJSON: "إنشاء JSON قابل للقراءة",
    toolbox: "صندوق الأدوات",
    "property-grid": "Properties",
    propertyGridFilteredTextPlaceholder: "اكتب للبحث...",
    toolboxGeneralCategory: "قائمة العام",
    //delSelObject: "Delete selected object",
    //editSelObject: "Edit selected object",
    correctJSON: "الرجاء إدخال بيانات JSON صحيحة",
    surveyResults: "نتايج الاستبيان: ",
    surveyResultsTable: "Table",
    surveyResultsJson: "JSON",
    resultsTitle: "عنوان السؤال",
    resultsName: "اسم السؤال",
    resultsValue: "قيمة الاجابة",
    resultsDisplayValue: "اعرض القيمة",
    modified: "تم تعديلة",
    saving: "جاري الحفظ",
    saved: "تم حفظة",
    propertyEditorError: "خطأ",
    saveError: "خطأ| لا يمكن حفظ محتوي المحرر",
    translationPropertyGridTitle: "اعدادات الترجمة",
    translationLanguages: "اللغات",
    translationAddLanguage: "اختر اللغة التي تريد ترجمتها",
    translationShowAllStrings: "إظهار جميع النصوص",
    translationShowAllPages: "إظهار جميع الصفحات",
    translationNoStrings: "لا توجد نصوص للترجمة. من فضلك ، قم بتغيير الفلتر.",
    translationExportToSCVButton: "تصدير الي CSV",
    translationImportFromSCVButton: "استيراد من CSV",
    translationMergeLocaleWithDefault: "دمج {0} باللغة الافتراضية",
    translationPlaceHolder: "ترجم...",
    bold: "عريض",
    italic: "مائل",
    underline: "تحتها خط",
    fpAddQuestion: "إضافة سؤال..",
    selectPage: "اختر الصفحة...",
    chooseElement: "اختر عنصر....",
    htmlPlaceHolder: "محتوى HTML سيكون هنا",
    signHere: "التوقيع هنا",
    panelPlaceHolder: "قم بإسقاط السؤال من صندوق الأدوات إلى هنا",
    addNewQuestion: "أضف سؤال",
    addNewTypeQuestion: "إضافة {0}",
    chooseLogoPlaceholder: "[الشعار]",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      addNewItem: "إضافة عنصر جديد",
      //Logic tab strings
      empty_tab: "قم بإنشاء قاعدة لتخصيص تدفق الاستبيان",
      page_visibilityName: "أظهر (اخفي) الصفحة",
      panel_visibilityName: "أظهر (اخفي) اللوحة",
      panel_enableName: "تمكين (تعطيل) لوحة",
      question_visibilityName: "أظهر (اخفي) السؤال",
      question_enableName: "تمكين (تعطيل) السؤال",
      question_requireName: "اجعل السؤال مطلوبًا",
      trigger_completeName: "استبيان كامل",
      trigger_setvalueName: "تعيين قيمة السؤال",
      trigger_copyvalueName: "نسخ قيمة السؤال",
      trigger_skipName: "تخطى السؤال",
      trigger_runExpressionName: "قم بتشغيل العملية الحسابية",
      completedHtmlOnConditionName: "نص مخصص 'صفحة الشكر'",
      page_visibilityDescription: "اجعل الصفحة مرئية عندما يعود العملية الحسابية صحيحًا. وإلا فابقه غير مرئي.",
      panel_visibilityDescription: "اجعل اللوحة مرئية عندما يعود العملية الحسابية صحيحًا. وإلا فابقه غير مرئي.",
      panel_enableDescription: "اجعل اللوحة وجميع العناصر الموجودة بداخلها ممكنة عندما يعود العملية الحسابية صحيحًا. وإلا احتفظ بها معطلة.",
      question_visibilityDescription: "اجعل السؤال مرئيًا عندما يعود العملية الحسابية صحيحًا. وإلا فابقه غير مرئي.",
      question_enableDescription: "اجعل السؤال ممكّنًا عندما يعود العملية الحسابية صحيحًا. وإلا أبقها معطلة.",
      question_requireDescription: "يصبح السؤال مطلوبًا عندما يعود العملية الحسابية صحيحًا.",
      trigger_completeDescription: "عندما يعود العملية الحسابية صحيحًا ، يكتمل الاستطلاع ويرى المستخدم النهائي 'صفحة شكرًا لك'.",
      trigger_setvalueDescription: "عندما يتم تغيير قيم السؤال ، التي يتم استخدامها في العملية الحسابية ، ويعود العملية الحسابية إلى القيمة الصحيحة ، يتم تعيين القيمة على السؤال المحدد.",
      trigger_copyvalueDescription: "عندما يتم تغيير قيم السؤال ، التي يتم استخدامها في العملية الحسابية ، ويعود العملية الحسابية إلى القيمة الصحيحة ، يتم نسخ قيمة أحد الأسئلة المحددة إلى سؤال آخر محدد",
      trigger_skipDescription: "عندما يعود العملية الحسابية صحيحًا ، يتخطى الاستطلاع / يركز على السؤال المحدد.",
      trigger_runExpressionDescription: "عندما يعود العملية الحسابية صحيحًا ، يتم تنفيذ العملية الحسابية المخصص. يمكنك اختياريا تعيين نتيجة هذا العملية الحسابية في السؤال المحدد",
      completedHtmlOnConditionDescription: "إذا كان العملية الحسابية  صحيحًا ، فسيتم تغيير النص الافتراضي لصفحة 'شكرًا لك' إلى النص المحدد.",
      itemExpressionText: "العملية الحسابية {0} نشط",
      itemEmptyExpressionText: "لم يتم تعيين قاعدة جديدة",
      page_visibilityText: "اجعل الصفحة {0} مرئية",
      panel_visibilityText: "اجعل اللوحة {0} مرئية",
      panel_enableText: "اجعل اللوحة {0} ممكنة",
      question_visibilityText: "اجعل السؤال {0} مرئيًا",
      question_enableText: "اجعل السؤال {0} ممكنًا",
      question_requireText: "اجعل السؤال {0} مطلوبًا",
      trigger_completeText: "اصبح الاستطلاع كاملًا",
      trigger_setvalueText: "تعيين القيمة {0} إلى السؤال {1}",
      trigger_copyvalueText: "نسخ إلى السؤال: {0} القيمة من السؤال {1}",
      trigger_skipText: "تخطي الاستبيان إلى السؤال {0}",
      trigger_runExpressionText1: "تشيغل العملية الحسابية: {0}",
      trigger_runExpressionText2: " ووضع نتيجتها موضع تساؤل: {0}",
      completedHtmlOnConditionText: "أضهر النص المخصص ل 'صفحة الشكر'",
      showAllQuestions: "إظهار كل الأسئلة",
      showAllActionTypes: "إظهار كل أنواع الإجراءات",
      conditions: "الشرط/الشروط",
      actions: "الاجراءات {0}",
      expressionEditorTitle: "حدد الشرط/الشروط",
      actionsEditorTitle: "حدد إجراء/اجراءات",
      deleteAction: "حذف الإجراء",
      addNewAction: "إضافة إجراء جديد",
      selectedActionCaption: "حدد إجراء لإضافته ...",
      expressionInvalid: "العملية الحسابية فارغ أو غير صالح. يرجى تصحيح ذلك.",
      noActionError: "من فضلك اختر إجراء واحد على الأقل.",
      actionInvalid: "من فضلك اصلح الإجراء {0}",
      expressionSetup: "إعداد العملية الحسابية",
      actionsSetup: "إعداد الإجراء"
    }
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "تطبيق",
    ok: "موافق",
    save: "حفظ",
    clear: "مسح",
    saveTooltip: "حفظ",
    cancel: "إلغاء",
    set: "تثبيت",
    reset: "إعادة تعيين",
    change: "تغيير",
    refresh: "تحديث",
    close: "إغلاق",
    delete: "حذف",
    add: "إضافة",
    addNew: "إضافة جديد",
    addItem: "اضغط لاضافة عنصر..",
    removeItem: "إزالة العنصر",
    dragItem: "سحب العنصر للحفظ",
    addOther: "آخري",
    addSelectAll: "Select All",
    addNone: "لا شيء",
    removeAll: "إزالة الكل",
    edit: "التعديل",
    back: "رجوع بدون حفظ",
    backTooltip: "رجوع بدون حفظ",
    saveAndBack: "حفظ ورجوع",
    saveAndBackTooltip: "حفظ ورجوع",
    doneEditing: "تم",
    // itemValueEdit: "Visible If",
    editChoices: "تعديل الخيارات",
    showChoices: "عرض الخيارات",
    move: "نقل",
    empty: "<فارغ>",
    emptyValue: "القيمة فارغة",
    fastEntry: "Fast Entry",
    fastEntryNonUniqueError: "Value '{0}' is not unique",
    fastEntryChoicesCountError: "Please limit the number of items from {0} to {1}",
    formEntry: "إدخال النموذج",
    testService: "اختبر الخدمة",
    itemSelectorEmpty: "Please select the element",
    conditionActionEmpty: "من فضلك قم باختيار إجراء",
    conditionSelectQuestion: "إختر السؤال...",
    conditionSelectPage: "اختر صفحة..",
    conditionSelectPanel: "اختر لوحة..",
    conditionValueQuestionTitle: "من فضلك ادخل القيمة",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "You can use curly brackets to get access to the question values: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). You can use functions as: iif(), today(), age(), min(), max(), count(), avg() and others.",
    aceEditorHelp: "اضغط CTRL+SPACE للحصول علي ملحوظة تكملة العملية الحسابية",
    aceEditorRowTitle: "الصف الحالي",
    aceEditorPanelTitle: "اللوحة الحالية",
    showMore: "لمزيد من التفاصيل, من فضلك ادخل علي الوثيقة الرسيمة",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "الاسئلة المتاحة:",
    cellsEmptyRowsColumns: "يجب ان يكون علي الاقل هناك صف او عمود واحد",
    propertyIsEmpty: "من فضلك ادخل قيمة",
    propertyIsNoUnique: "من فضلك ادخل قيمة فريدة",
    propertyNameIsNotUnique: "من فضلك ادخل اسم فريد",
    listIsEmpty: "إضافة عنصر جديد",
    expressionIsEmpty: "العملية الحسابية فارغة",
    value: "القيمة",
    text: "النص",
    rowid: "رقم الصف",
    imageLink: "رابط الصورة",
    columnEdit: "تعديل العمود: {0}",
    itemEdit: "Edit item: {0}",
    url: "رابط إلكتروني URL",
    path: "المسار",
    valueName: "اسم القيمة",
    titleName: "اسم العنوان",
    imageLinkName: "اسم رابط الصورة",
    allowEmptyResponse: "السماح بجواب فارغ",
    titlePlaceholder: "ادخل العنوان",
    surveyTitlePlaceholder: "أدخل عنوان الإستبيان هنا",
    pageTitlePlaceholder: "أدخل عنوان الصفحة هنا",
    descriptionPlaceholder: "ادخل الوصف",
    surveyDescriptionPlaceholder: "أدخل وصف للإستبيان",
    pageDescriptionPlaceholder: "أدخل وصف للصفحة",
    hasOther: "هل هناك خيار أخرى",
    otherText: "نص خيار أخرى",
    hasNone: "هل هناك خيار بلا",
    noneText: "نص خيار بلا",
    hasSelectAll: "هل هناك خيار إختيار الكل",
    selectAllText: "نص خيار إختر الكل",
    choicesMin: "الحد الأدنى لقيمة العناصر التي تم إنشاؤها تلقائيًا",
    choicesMax: "الحد الأقصى لقيمة العناصر التي تم إنشاؤها تلقائيًا",
    choicesStep: "الفرق بين العناصر التي تم إنشاؤها تلقائيًا",
    name: "الإسم",
    title: "العنوان",
    cellType: "نوع الخلية",
    colCount: "عدد الأعمدة",
    choicesOrder: "إختر ترتيب الإختيارات",
    visible: "مرئي؟",
    isRequired: "مطلوب؟",
    isAllRowRequired: "المطالبة بالأجوبة لكل الصفوف",
    requiredErrorText: "نص خطأ إلزامي السؤال",
    startWithNewLine: "إظهار السؤال في صف جديد",
    rows: "عدد الصفوف",
    cols: "عدد الأعمدة",
    placeHolder: "نص حامل خانة الإدخال",
    showPreview: "عرض منطقة المعاينة",
    storeDataAsText: "تخزين محتويات ملف JSON كنص",
    maxSize: "أقصى حجم للملف بالبايت",
    imageHeight: "طول الصورة",
    imageWidth: "عرض الصورة",
    rowCount: "عدد الصفوف",
    columnLayout: "تخطيط الأعمدة",
    addRowLocation: "موقع زر إضافة صف",
    addRowText: "نص زر إضافة صف",
    removeRowText: "نص زر حذف صف",
    rateMin: "أصغر معدل",
    rateMax: "أكبر معدل",
    rateStep: "خطوات المعدل",
    minRateDescription: "وصف أصغر معدل",
    maxRateDescription: "وصف أكبر معدل",
    inputType: "نوع المدخل",
    optionsCaption: "خيارات الشرح",
    showOptionsCaption: "عرض خيارات الوصف",
    defaultValue: "القيمة الإفتراضية",
    cellsDefaultRow: "نصوص الخلاية الافتراضي",
    surveyEditorTitle: "تعديل اعدادات الاستبيان",
    qEditorTitle: "تعديل: {0}",
    maxLength: "أقصى طول",
    buildExpression: "بناء",
    editExpression: "التعديل",
    and: "أو",
    or: "و",
    remove: "Remove",
    addCondition: "أضف الشرط",
    if: "إذا قيمة",
    then: "من ثم",
    setToName: "إلى",
    fromName: "من",
    ruleIsNotSet: "القاعدة غير صحيحة",
    //survey
    showTitle: "إظهار/إخفاء العنوان",
    expandCollapseTitle: "توسيع/طي العنوان",
    locale: "اللغة الإفتراضية",
    simulator: "Choose device",
    landscapeOrientation: "أفقي",
    portraitOrientation: "عمودي",
    mode: "النمط (التعديل، القرائة فقط)",
    clearInvisibleValues: "إمسح القيم الغير مرئية",
    cookieName: "أدخل إسم ملف تعريف الإرتباط (لتعطيل المشاركة بالإستبيان أكثر من مرة)",
    sendResultOnPageNext: "إرسال نتائج الإستبيان على الصفحة التالية",
    storeOthersAsComment: "تخزين قيمة 'أخرى' في حقل منفصل",
    showPageTitles: "عرض عنوان الصفحات",
    showPageNumbers: "عرض أرقام الصفحات",
    pagePrevText: "نص زر الإنتقال للصفحة السابقة",
    pageNextText: "نص زر الإنتقال للصفحة التالية",
    completeText: "نص زر إنهاء الإستبيان",
    previewText: "نص زر المعاينة",
    editText: "نص زر التعديل",
    startSurveyText: "نص زر بدء المشاركة بالإستبيان",
    showNavigationButtons: "إظهار أزرار الإنتقال (التنقل الإفتراضي)",
    showPrevButton: "إظهار زر التنقل السابق (السماح للمستخدم من العودة للصفحة السابقة في الإستبيان)",
    firstPageIsStarted: "الصفحة الأولى في الإستبيان هي صفحة البدء",
    showCompletedPage: "إظهار الصفحة المكتملة في النهاية (صفحة ويب مكتملة)",
    goNextPageAutomatic: "عند الإجابة على جميع الأسئلة، إنتقل إلى الصفحة التالية تلقائياً",
    showProgressBar: "إظهار شريط التقدم",
    questionTitleLocation: "موقع عنوان السؤال",
    requiredText: "رمز السؤال مطلوب",
    questionStartIndex: "فهرس بداية الأسئلة (1،2 أو 'أ' ، 'ب')",
    showQuestionNumbers: "إظهار أرقام الأسئلة",
    questionTitleTemplate: "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "موقع خطأ في السؤال",
    focusFirstQuestionAutomatic: "ركز المؤشر على السؤال الأول عند تغير الصفحة",
    questionsOrder: "ترتيب العناصر على الصفحة",
    maxTimeToFinish: "أقصى وقت لإنهاء الإستبيان",
    maxTimeToFinishPage: "أقصى وقت لإنهاء الصفحة في الإستبيان",
    showTimerPanel: "إظهار لوحة المؤقت",
    showTimerPanelMode: "إظهار نمط لوحة المؤقت",
    renderMode: "نمط العرض",
    allowAddPanel: "السماح بإضافة لوحة",
    allowRemovePanel: "السماح بإزالة لوحة",
    panelAddText: "نص إضافة لوحة",
    panelRemoveText: "نص إزالة لوحة",
    isSinglePage: "Show all elements on one page",
    html: "صفحة ويب HTML",
    expression: "عملية حسابية",
    minValue: "الحد الأدنى للقيمة",
    maxValue: "الحد الأقصى للقيمة",
    minLength: "الحد الأدنى لطول النص",
    allowDigits: "السماح بالأرقام",
    minCount: "الحد الأدنى لعدد",
    maxCount: "Maximum count",
    regex: "التعابير النمطية",
    totalText: "إجمالي النص",
    totalType: "إجمالي النوع",
    totalExpression: "إجمالي العمليات الحسابية",
    totalDisplayStyle: "إجمالي نمط العرض",
    totalCurrency: "مجموع العملات",
    totalFormat: "إجمالي التنسيق",
    // Header  adorner
    logoPosition: "موقع الشعار",
    addLogo: "إضافة شعار...",
    changeLogo: "تغيير الشعار...",
    logoPositions: {
      none: "حذف الشعار",
      left: "يسار",
      right: "يمين",
      top: "في الأعلى",
      bottom: "في الأسفل"
    },
    tabs: {
      general: "عام",
      fileOptions: "الخيارات",
      html: "Html Editor",
      columns: "الأعمدة",
      rows: "الصفوف",
      choices: "الخيارات",
      items: "العناصر",
      visibleIf: "مرئي عندما",
      enableIf: "مفعل عندما",
      requiredIf: "مطلوب عندما",
      rateValues: "قيم التقييم",
      choicesByUrl: "خيارات من الإنترنت",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "الترقيم",
      validators: "المدققات",
      navigation: "التنقل",
      question: "السؤال",
      pages: "الصفحات",
      completedHtml: "صفحة الويب المكتملة",
      completedHtmlOnCondition: "صفحة ويب مكتملة بشرط",
      loadingHtml: "Loading Html",
      timer: "مؤقت/إختبار قصير",
      calculatedValues: "Calculated Values",
      triggers: "Triggers",
      templateTitle: "عنوان القالب",
      totals: "Totals",
      logic: "المنطق",
      layout: "التنسيق",
      data: "البيانات",
      validation: "التحقق",
      cells: "الخلايا",
      showOnCompleted: "عند الإنتهاء من الإستبيان",
      logo: "الشعار في عنوان الإستبيان",
      slider: "Slider",
      others: "غير ذلك"
    },
    editProperty: "تعديل الخاصية {0}:",
    items: "[ Items: {0} ]",
    enterNewValue: "من فضلك ادخل القيمة الجديدة",
    noquestions: "لا توجد أسئلة في هذا الاستبيان",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "أضغط زرار Enter للتعديل",
    keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "جعل الصفحات مرئية",
    triggerMakeQuestionsVisible: "جعل الأسئلة مرئية",
    triggerCompleteText: "أكمل الاستبيان اذا تم بنجاح",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "انسخ القيمة من: ",
    triggerRunExpression: "احسب العملية الحسابية",
    triggerSetValue: "to: ",
    triggerGotoName: "أذهب الي السؤال: ",
    triggerIsVariable: "لا تضع المتغير في نتائج الاستبيان",
    triggerRunExpressionEmpty: "من فضلك ادخل عملية حسابية صحيحة",
    noFile: "لم تقم باختيار ملف"
  },
  //Property values
  pv: {
    auto: "تلقائي",
    static: "ثابتة",
    responsive: "متجاوب",
    contain: "إحتواء",
    cover: "تغطية",
    fill: "ملئ",
    onBlur: "عند الطمس",
    onTyping: "عند الكتابة",
    video: "فيديو",
    image: "صور",
    true: "صحيح",
    false: "خطأ",
    inherit: "يَرث",
    show: "إظهار",
    hide: "إخفاء",
    initial: "مبدئي",
    random: "عشوائي",
    collapsed: "مقلص",
    expanded: "موسع",
    none: "بلا",
    asc: "تصاعدي",
    desc: "تنازلي",
    indeterminate: "غير محدد",
    decimal: "رقم عشري",
    currency: "العملة",
    percent: "النسبة المئوية",
    firstExpanded: "توسيع أول لوح",
    off: "إيقاف",
    onPanel: "على اللوحة",
    onSurvey: "على الإستبيان",
    list: "قائمة",
    progressTop: "التقدم بالأعلى",
    progressBottom: "التقدم بالأسف",
    progressTopBottom: "التقدم بالأعلى والأسفل معاً",
    horizontal: "عرضي",
    vertical: "عمودي",
    default: "الإفتراضي",
    top: "الأعلى",
    bottom: "الأسفل",
    topBottom: "الأعلى والأسفل",
    both: "الكل",
    left: "يسار",
    right: "يمين",
    color: "لون",
    date: "تاريخ",
    datetime: "تاريخ ووقت",
    "datetime-local": "تاريخ ووقت محلي",
    email: "بريد إلكتروني",
    month: "شهر",
    number: "أرقام",
    password: "كلمة سر",
    range: "نطاق",
    tel: "رقم هاتف",
    text: "نص",
    time: "وقت",
    url: "رابط إلكتروني URL",
    week: "إسبوع",
    hidden: "مخفي",
    on: "تشغيل",
    onPage: "على الصفحة",
    edit: "التعديل",
    display: "العرض",
    onComplete: "عند الإنتهاء",
    onHidden: "عند الإخفال",
    onHiddenContainer: "عند إخفاء الحاوية",
    all: "الكل",
    page: "الصفحة",
    survey: "الإستبيان",
    onNextPage: "عند الإنتقال للصفحة التالية",
    onValueChanging: "عند تغيير القيمة",
    onValueChanged: "إذا تغيرت القيمة",
    singlePage: "صفحة واحدة",
    standard: "أساسي",
    questionPerPage: "سؤال لكل صفحة",
    noPreview: "بلا عرض",
    showAllQuestions: "المعاينة مع جميع الأسئلة",
    showAnsweredQuestions: "المعاينة مع الأسئلة المجٌابة",
    pages: "الصفحات",
    questions: "الأسئلة",
    requiredQuestions: "الأسئلة المطلوبة",
    correctQuestions: "الإجابات الصحيحة",
    buttons: "الأزرار",
    underInput: "أسفل خانة الإدخال",
    underTitle: "أعلى العنوان",
  },
  //Operators
  op: {
    empty: "فارغة",
    notempty: "ليست فارغة",
    equal: "تساوي",
    notequal: "لا تساوي",
    contains: "تحتوي",
    notcontains: "لا تحتوي",
    anyof: "أي من",
    allof: "كلاً من",
    greater: "أكبر",
    less: "أقل",
    greaterorequal: "أكبر أو يساوي",
    lessorequal: "أقل أو يساوي",
    and: "و",
    or: "أو",
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "اختر هذة الصفحة لاختبارها",
    showInvisibleElements: "إظهار العناصر الغير مرئية"
  },
  validators: {
    answercountvalidator: "عدد الاجابات",
    emailvalidator: "بريد إلكتروني",
    expressionvalidator: "عملية حسابية",
    numericvalidator: "رقمية",
    regexvalidator: "تعبير رياضي",
    textvalidator: "النص",
  },
  triggers: {
    completetrigger: "إنهاء الإستبيان",
    setvaluetrigger: "تحديد قيمة",
    copyvaluetrigger: "نسخ قيمة",
    skiptrigger: "الإنتقال إلى سؤال",
    runexpressiontrigger: "تشغيل العملية الحسابية",
    visibletrigger: "تغيير الرؤية (مهمل)",
  },
  pehelp: {
    //expression:
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'",
    },
    navigationButtonsVisibility: "رؤية أزرار التنقل",
    questionsOrder: "ترتيب الأسئلة",
    maxTimeToFinish: "الحد الأقصى للوقت للإنهاء",
    visible: "مرئي",
    visibleIf: "مرئي عندما",
    questionTitleLocation: "موقع عنوان السؤال",
    description: "الوصف",
    state: "الحالة",
    isRequired: "مطلوب؟",
    requiredIf: "مطلوب عندما",
    indent: "المسافة البادئة",
    requiredErrorText: "نص الخطأ عند الإفادة",
    startWithNewLine: "البدء بسطر جديد",
    innerIndent: "المسافة البادئة الداخلية",
    page: "الصفحة",
    width: "العرض",
    commentText: "نص التعليق",
    valueName: "اسم القيمة",
    enableIf: "فعال عندما",
    defaultValue: "القيمة الإفتراضية",
    correctAnswer: "الإجابة الصحيحة",
    readOnly: "للقرائة فقط",
    validators: "المدققات",
    titleLocation: "موقع عنوان السؤال",
    hasComment: "هل هناك تعليق؟",
    hasOther: "لدية آخر",
    choices: "الإختيارات",
    choicesOrder: "ترتيب الخيارات",
    choicesByUrl: "خيار عن طريق رابط إلكتروني URL",
    otherText: "نص الآخري",
    otherErrorText: "نص الخطأ عند الآخري",
    storeOthersAsComment: "حفظ الآخري كتعليق",
    label: "المسمى",
    showTitle: "إظهار العنوان",
    valueTrue: "قيمة صحيح",
    valueFalse: "قيمة خطأ",
    cols: "الأعمدة",
    rows: "الصفوف",
    placeHolder: "placeHolder",
    optionsCaption: "إختيارات الإختصار",
    expression: "عملية حسابية",
    format: "الصيغة",
    displayStyle: "أسلوب العرض",
    currency: "العملة",
    useGrouping: "إستخدام التجميع",
    showPreview: "إظهار المعاينة",
    allowMultiple: "السماح بالمتعدد",
    imageHeight: "ارتفاع الصورة",
    imageWidth: "عرض الصورة",
    storeDataAsText: "حفظ البيانات كنص",
    maxSize: "الحد الأقصى لحجم الملف",
    html: "صفحة ويب HTML",
    columns: "الأعمدة",
    cells: "الخليات",
    isAllRowRequired: "هل يتوفر على جميع الصفوف على الإجابة؟",
    horizontalScroll: "تمرير أٌفقي بالمؤشر",
    cellType: "نوع الخلية",
    columnsLayout: "تخطيط الأعمدة",
    columnColCount: "عدد تقسيم العمود",
    columnMinWidth: "أقل عرض للعمود",
    rowCount: "عدد الصفوف",
    minRowCount: "أقل عدد للصفوف",
    maxRowCount: "أكبر عدد للصفوف",
    keyName: "إسم المفتاح",
    keyDuplicationError: "خطأ تكرار المفتاح",
    confirmDelete: "رسالة تأكيد الحذف",
    confirmDeleteText: "نص رسالة تأكيد الحذف",
    addRowLocation: "أضف صف جديد",
    addRowText: "نص إضافة صف جديد",
    removeRowText: "نص إزالة صف جديد",
    items: "العناصر",
    itemSize: "حجم العنصر",
    colCount: "عدد الأعمدة",
    templateTitle: "عنوان القالب",
    templateDescription: "وصف القالب",
    allowAddPanel: "السماح بإضافة لوحة",
    allowRemovePanel: "السماح بحذف لوحة",
    panelCount: "عدد اللوحات",
    minPanelCount: "أقل عدد للوحات",
    maxPanelCount: "أعلى عدد للوحات",
    panelsState: "حالة الوحة",
    panelAddText: "نص إضافة لوحة",
    panelRemoveText: "نص حذف لوحة",
    panelPrevText: "نص اللوحة السابقة",
    panelNextText: "نص اللوحة التالية",
    showQuestionNumbers: "إظهار أرقام الأسئلة",
    showRangeInProgress: "عرض نطاق القيد التقدم",
    renderMode: "نمط العرض",
    templateTitleLocation: "موقع عنوان القالب",
    rateValues: "قييم التقييم",
    rateMin: "أدنى قيمة",
    rateMax: "أعلى قيمة",
    rateStep: "خطوة التقييم",
    minRateDescription: "الوصف الأدنى للتقييم",
    maxRateDescription: "الوصف الأقصى للتقييم",
    inputType: "نوع الإدخال",
    size: "الحجم",
    locale: "اللغة",
    focusFirstQuestionAutomatic: "التركيز على السؤال الأول تلقائياً",
    completedBeforeHtml: "الإنتهاء قبل HTML",
    loadingHtml: "تحميل HTML",
    triggers: "المحفزات",
    cookieName: "اسم ملفات الارتباط",
    sendResultOnPageNext: "إرسال النتائج عند الذهاب إلى الصفحة التالية",
    showNavigationButtons: "إظهار أزرار التنقل",
    showPrevButton: "إظهار زر الرجوع",
    showPageTitles: "إظهار عناوين الصفحة",
    showCompletedPage: "إظهار الصفحة المكتملة",
    showPageNumbers: "إظهار أرقام الصفحة",
    questionErrorLocation: "موقع خطأ الأسئلة",
    showProgressBar: "إظهار شريط التقدم",
    mode: "وضع",
    goNextPageAutomatic: "الذهاب إلى الصفحة التالية تلقائياً",
    checkErrorsMode: "نمط التحقق من الأخطاء",
    clearInvisibleValues: "إزالة القيم الخاصة بالغير مرئية",
    startSurveyText: "نص البدء",
    pagePrevText: "نص الصفحة السابقة",
    pageNextText: "نص الصفحة التالية",
    completeText: "نص الاكمال",
    requiredText: "نص الحقل المطلوب",
    questionStartIndex: "مؤشر الأسئلة",
    questionTitleTemplate: "نمط عنوان الأسئلة",
    firstPageIsStarted: "ابدأ الصفحة الأولى",
    isSinglePage: "هل يتوفر على صفحة واحدة؟",
    maxTimeToFinishPage: "الحد الأقصى للوقت للانتهاء للصفحة",
    showTimerPanel: "إظهار لوحة الوقت",
    showTimerPanelMode: "وضع لوحة الوقت",
    defaultPanelValue: "القيمة الإفتراضية للوحة",
    defaultRowValue: "قيمة الصف الإفتراضية",
    hasNone: "لدية لا شيء",
    noneText: "نص لا شيء",
    text: "نص",
    multiSelect: "متعدد الإختيار",
    showLabel: "عرض الملصق",
    logo: "الشعار",
    logoWidth: "عٌرض الشعار",
    logoHeight: "طول الشعار",
    logoFit: "تناسب الشعار",
    focusOnFirstError: "تركيز المؤشر على أول خطأ",
    pages: "الصفحات",
    calculatedValues: "القيم المحسوبة",
    includeIntoResult: "الإضافة إلى النتائج",
    navigateToUrl: "الإنتقال إلى رابط URL",
    completedHtml: "صفحة الويب المكتملة",
    completedHtmlOnCondition: "صفحة ويب مكتملة بشرط",
    navigateToUrlOnCondition: "الإنتقال إلى رابط إلكتروني بشرط",
    questionDescriptionLocation: "موقع وصف السؤال",
    progressBarType: "نوع شريط التقدم",
    maxTextLength: "أقصى طٌول للنص",
    maxOthersLength: "أقصى طول لخيار 'أخرى'",
    textUpdateMode: "نمط تحديث النص",
    autoGrowComment: "نمو تلقائي للسؤال من نوع تعليق",
    questionTitlePattern: "تنسيق عنوان السؤال",
    questionsOnPageMode: "الأسئلة في الصفحات",
    showPreviewBeforeComplete: "المعاينة قبل الإنتهاء من الإستبيان",
    widthMode: "نمط عٌرض الشاشة",
    showNumber: "عرض الرقم",
    navigationTitle: "عنوان التنقل",
    navigationDescription: "الوصف للتنقل",
    useDisplayValuesInTitle: "إستخدم عرض القيم في العنوان",
    setDefaultValue: "تثبيت قيمة إفتراضية",
    setCorrectValue: "تثبيت إجابة صحيحة",
    minWidth: "أقل عرض",
    maxWidth: "أعلى عرض",
    descriptionLocation: "موقع وصف السؤال",
    hideNumber: "إخفاء رقم السؤال",
    defaultValueExpression: "العملية الحسابية الإفتراضية",
    bindings: "الإرتباطات",
    value: "القيمة",
    columnsVisibleIf: "أظهر الأعمدة إذا",
    rowsVisibleIf: "أظهر الصفوف إذا",
    showHeader: "عرض رأس المصفوفة",
    detailPanelMode: "نمط تفاصيل اللوحة",
    rowTitleWidth: "عرض عنوان الصف",
    allowAddRows: "السماح إضافة صفوف",
    allowRemoveRows: "السماح لإزالة صفوف",
    defaultValueFromLastRow: "القيمة الإفتراضية تكون من الصف الأخير",
    hideColumnsIfEmpty: "إخفاء في حالة كان العمود فارغ",
    emptyRowsText: "نص الصفوف فارغة",
    detailPanelShowOnAdding: "إظهار لوحة التفاصيل عند الإضافة",
    allowRowsDragAndDrop: "السماح للسحب والإدراج للصفوف",
    rowsOrder: "ترتيب الصفوف",
    hideIfRowsEmpty: "إخفاء إذا كان الصف فارغ",
    maximumFractionDigits: "الحد الأقصى للكسور",
    minimumFractionDigits: "الحد الأدنى للكسور",
    choicesFromQuestion: "الإختيارات من الأسئلة",
    choicesFromQuestionMode: "اختر من السؤال",
    hideIfChoicesEmpty: "إخفاء عندما تكون الخيارات فارغة",
    choicesVisibleIf: "الإختيارات مرئية عندما",
    choicesEnableIf: "الإختيارات مفعلة عندما",
    otherPlaceHolder: "حامل نص لخيار الأخرى",
    maxSelectedChoices: "أقصى عدد للإختيار",
    showClearButton: "إظهار زر الإزالة",
    contentMode: "نمط عرض المحتوى",
    imageFit: "إحتواء الصورة",
    autoComplete: "الإكمال التلقائي",
    min: "الحد الأدنى",
    max: "الحد الأقصى",
    minValueExpression: "الحد الأدنى للعملية حسابية",
    maxValueExpression: "الحد الأقصى للعملية حسابية",
    minErrorText: "الحد الأدنى للقيمة",
    maxErrorText: "الحد الأقصى للقيمة",
    step: "خطوة",
    dataList: "قائمة البيانات",
    autoGrow: "تمدد تلقائي",
    multiLine: "متعدد الأسطر",
    allowImagesPreview: "السماح بعرض الصور",
    acceptedTypes: "الأنواع المسموح بها",
    waitForUpload: "الإنتظار للرفع",
    needConfirmRemoveFile: "سؤال تأكيد لحذف الملف",
    labelTrue: "ملصق صحيح",
    labelFalse: "ملصق خطأ",
    height: "الارتفاع",
    allowClear: "السماح بإزالة",
    penColor: "لون القلم",
    backgroundColor: "لون الخلفية",
    dataFormat: "صيغة البيانات",
    defaultValueFromLastPanel: "القيمة الإفتراضية من أخر لوحة",
    panelRemoveButtonLocation: "موقع زر حذف اللوحة",
    showCaption: "إظهار الشرح",
    iconName: "اسم الأيقونة",
    iconSize: "حجم الأيقونة"
  },
};

//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
editorLocalization.locales["ar"] = arabicStrings;