import { Breadcrumbs as MantineBreadcrumbs, Anchor } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToolById } from '../ToolRegistry';
import { flashcardModeLabels } from '@/tools/flashcards/types/FlashcardMode';

export function Breadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on home page
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems = [
    <Anchor key="home" onClick={() => navigate('/')} size="sm">
      Home
    </Anchor>
  ];

  // Handle /tools/* routes
  if (pathSegments[0] === 'tools' && pathSegments[1]) {
    const toolId = pathSegments[1];
    const tool = getToolById(toolId);
    
    if (tool) {
      breadcrumbItems.push(
        <Anchor key={toolId} onClick={() => navigate(tool.path)} size="sm">
          {tool.label}
        </Anchor>
      );

      // Handle flashcards modes
      if (toolId === 'flashcards' && pathSegments[2]) {
        const mode = pathSegments[2];
        const modeLabel = flashcardModeLabels[mode as keyof typeof flashcardModeLabels] || mode;
        
        breadcrumbItems.push(
          <Anchor key={mode} onClick={() => navigate(`/tools/flashcards/${mode}`)} size="sm">
            {modeLabel}
          </Anchor>
        );
      }
    }
  }

  // Handle /settings route
  if (pathSegments[0] === 'settings') {
    breadcrumbItems.push(
      <Anchor key="settings" onClick={() => navigate('/settings')} size="sm">
        Settings
      </Anchor>
    );
  }

  // Only show if there's more than just "Home"
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return <MantineBreadcrumbs mb="md">{breadcrumbItems}</MantineBreadcrumbs>;
}
