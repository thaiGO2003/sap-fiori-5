import React, { useMemo, useState } from 'react';
import { guides } from '../utils/guidesManifest';

type GroupKey = 'fiori-elements' | 'fiori-freestyle' | 'tool-services';

const GROUP_LABELS: Record<GroupKey, string> = {
  'fiori-elements': 'Fiori Elements',
  'fiori-freestyle': 'Fiori Free Style',
  'tool-services': 'Tool Services',
};

export const App: React.FC = () => {
  const initialQ = (() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') ?? '';
  })();
  const [query, setQuery] = useState(initialQ);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const byGroup: Record<GroupKey, typeof guides> = {
      'fiori-elements': [],
      'fiori-freestyle': [],
      'tool-services': [],
    };
    guides.forEach((g) => {
      if (!q || `${g.title} ${g.category} ${g.group}`.toLowerCase().includes(q)) {
        byGroup[g.group as GroupKey].push(g);
      }
    });
    return byGroup;
  }, [query]);

  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <a className="home-btn" href="/">🏠</a>
          <span className="logo">SAP</span>
          <h1>SAP Fiori Guides Portal</h1>
        </div>
        <nav className="nav">
          <a href="#fe">Fiori Elements</a>
          <a href="#ff">Fiori Free Style</a>
          <a href="#tools">Tool Services</a>
        </nav>
        <div className="search">
          <input
            placeholder="Tìm kiếm hướng dẫn, category, nhóm..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="main">
        {(Object.keys(GROUP_LABELS) as GroupKey[]).map((grp) => (
          <section key={grp} id={grp === 'fiori-elements' ? 'fe' : grp === 'fiori-freestyle' ? 'ff' : 'tools'} className="group">
            <h2>{GROUP_LABELS[grp]}</h2>
            <div className="cards">
              {grouped[grp].length === 0 ? (
                <div className="empty">Không có kết quả phù hợp</div>
              ) : (
                grouped[grp].map((g) => (
                  <a key={g.id} className="card" href={g.path} target="_blank" rel="noreferrer">
                    <div className="card-title">{g.title}</div>
                    <div className="card-meta">
                      <span className="badge cat">{g.category}</span>
                      <span className="badge file">HTML</span>
                    </div>
                  </a>
                ))
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">© {new Date().getFullYear()} Fiori Guides Portal</footer>
    </div>
  );
};


