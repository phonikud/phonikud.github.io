// Initialize Lucide icons
lucide.createIcons();

// Single media playback functionality is in single-media-playback.js

if (typeof hljs !== 'undefined') {
    hljs.registerLanguage('bibtex', (hljs) => ({
        name: 'BibTeX',
        case_insensitive: true,
        contains: [
            hljs.COMMENT('%', '$'),
            { className: 'keyword', begin: /@[a-z]+(?=\{)/i },
            { className: 'symbol', begin: /(?<=\{)[a-z0-9_-]+(?=,)/i },
            { className: 'attr', begin: /\b[a-z]+\s*(?==)/i },
            {
                className: 'string',
                begin: /=\s*\{/,
                end: /\}/,
                excludeBegin: true,
                excludeEnd: true,
            },
            { className: 'punctuation', begin: /[{},=]/ },
        ],
    }));

    document.querySelectorAll('.citation-box code.language-bibtex').forEach((el) => {
        hljs.highlightElement(el);
    });
}

// Copy citation function
function copyToClipboard() {
    const citation = document.querySelector('.citation-box pre code').textContent;
    navigator.clipboard.writeText(citation).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check"></i>';
        btn.style.color = '#16a34a';
        lucide.createIcons({ nodes: [btn] });
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
        }, 2000);
    });
}


function scrollToNext() {
  const nextSection = document.querySelector('.architecture');
  if (nextSection) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}
