import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function ProjectsPage(): JSX.Element {
  // 나열하고 싶은 프로젝트 목록
  const projects = [
    {
      title: 'ODOC',
      description: 'ODOC 프로젝트 설명 및 아카이브입니다.',
      permalink: '/project/ODOC/odoc', // 실제 연결될 문서 주소
    },
    {
      title: 'ODOCAgent',
      description: 'ODOCAgent 프로젝트 설명 및 아카이브입니다.',
      permalink: '/project/ODOCAgent/odocagent', // 실제 연결될 문서 주소
    },
  ];

  return (
    <Layout title="Projects" description="진행한 프로젝트 아카이브입니다.">
      <main className="container margin-vert--lg">
        <h1>Projects</h1>
        <p>진행한 프로젝트 아카이브입니다. 아래에서 세부 프로젝트를 확인하실 수 있습니다.</p>
        
        <div className="row">
          {projects.map((project, idx) => (
            <div key={idx} className="col col--6 margin-bottom--md">
              <div className="card padding--lg" style={{ height: '100%' }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="text--right">
                  <Link className="button button--primary button--sm" to={project.permalink}>
                    보러가기 →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}