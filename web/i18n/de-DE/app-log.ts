const translation = {
  title: 'Protokolle',
  description: 'Die Protokolle zeichnen den Betriebsstatus der Anwendung auf, einschließlich Benutzereingaben und KI-Antworten.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      time: 'Zeit',
      endUser: 'Endbenutzer',
      input: 'Eingabe',
      output: 'Ausgabe',
      summary: 'Titel',
      messageCount: 'Nachrichtenzahl',
      userRate: 'Benutzerbewertung',
      adminRate: 'Op. Bewertung',
    },
    pagination: {
      previous: 'Vorherige',
      next: 'Nächste',
    },
    empty: {
      noChat: 'Noch keine Konversation',
      noOutput: 'Keine Ausgabe',
      element: {
        title: 'Ist da jemand?',
        content: 'Beobachten und annotieren Sie hier die Interaktionen zwischen Endbenutzern und KI-Anwendungen, um die Genauigkeit der KI kontinuierlich zu verbessern. Sie können versuchen, die Web-App selbst <shareLink>zu teilen</shareLink> oder <testLink>zu testen</testLink>, und dann zu dieser Seite zurückkehren.',
      },
    },
  },
  detail: {
    time: 'Zeit',
    conversationId: 'Konversations-ID',
    promptTemplate: 'Prompt-Vorlage',
    promptTemplateBeforeChat: 'Prompt-Vorlage vor dem Chat · Als Systemnachricht',
    annotationTip: 'Verbesserungen markiert von {{user}}',
    timeConsuming: '',
    second: 's',
    tokenCost: 'Verbrauchte Token',
    loading: 'lädt',
    operation: {
      like: 'gefällt mir',
      dislike: 'gefällt mir nicht',
      addAnnotation: 'Verbesserung hinzufügen',
      editAnnotation: 'Verbesserung bearbeiten',
      annotationPlaceholder: 'Geben Sie die erwartete Antwort ein, die Sie möchten, dass die KI antwortet, welche für die Feinabstimmung des Modells und die kontinuierliche Verbesserung der Qualität der Textgenerierung in Zukunft verwendet werden kann.',
    },
    variables: 'Variablen',
    uploadImages: 'Hochgeladene Bilder',
  },
  filter: {
    period: {
      today: 'Heute',
      last7days: 'Letzte 7 Tage',
      last4weeks: 'Letzte 4 Wochen',
      last3months: 'Letzte 3 Monate',
      last12months: 'Letzte 12 Monate',
      monthToDate: 'Monat bis heute',
      quarterToDate: 'Quartal bis heute',
      yearToDate: 'Jahr bis heute',
      allTime: 'Gesamte Zeit',
    },
    annotation: {
      all: 'Alle',
      annotated: 'Markierte Verbesserungen ({{count}} Elemente)',
      not_annotated: 'Nicht annotiert',
    },
  },
}

export default translation
