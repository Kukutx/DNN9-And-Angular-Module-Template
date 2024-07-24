# Use the Windows Server Core image with .NET Framework 4.8
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Install .NET Framework 4.8 runtime
RUN powershell -Command \
    Invoke-WebRequest -Uri https://download.visualstudio.microsoft.com/download/pr/3b4c8edc-dc65-438b-b9e8-0c4697f2b5a4/cc78579d6e5c5c7c7304e84f89aa0d9f/dotnetfx48.exe -OutFile dotnetfx48.exe; \
    Start-Process -FilePath dotnetfx48.exe -ArgumentList '/quiet', '/norestart' -NoNewWindow -Wait; \
    Remove-Item -Force dotnetfx48.exe

# Copy application files
WORKDIR /app
COPY WebapiModuleTemplate /app
WORKDIR /app/WebapiModuleTemplate

# Restore and build the application
RUN powershell -Command \
    nuget restore WebapiModuleTemplate.sln; \
    msbuild /p:Configuration=Release

# Expose the port and start the application
EXPOSE 80
ENTRYPOINT ["C:\\Program Files\\IIS Express\\iisexpress.exe", "/path:C:\\app\\WebapiModuleTemplate\\WebapiModuleTemplate\\bin\\Release\\WebapiModuleTemplate.exe"]
