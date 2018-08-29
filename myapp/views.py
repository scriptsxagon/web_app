from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.generic import UpdateView

from myapp.forms import SignUpForm

def index(request):
    if not request.user.is_authenticated():
        return render(request,'index.html')
    else:
        return render(request,'index_login.html')

def signup(request):
    if request.user.is_authenticated():
        return render(request, 'index_login.html')
    else:
            if request.method == 'POST':
                form = SignUpForm(request.POST)
                if form.is_valid():
                    form.save()
                    username = form.cleaned_data.get('username')
                    raw_password = form.cleaned_data.get('password1')
                    user = authenticate(username=username, password=raw_password)
                    login(request, user)
                    return redirect('index')
            else:
                form = SignUpForm()
            return render(request, 'registration/signup.html', {'form': form})

@method_decorator(login_required, name='dispatch')
class UserUpdateView(UpdateView):
    model = User
    fields = ('first_name', 'last_name', 'email', )
    template_name = 'my_account.html'
    success_url = reverse_lazy('index')

    def get_object(self):
        return self.request.user

@login_required
def materi(request, id, pelajaran_id):
    s_pelajaran = Lesson.objects.filter(course__id=id).order_by('order')
    materi = Materi.objects.filter(id=id)[0]
    pelajaran_aktif = int(pelajaran_id)
    if pelajaran_id == '0':
        konten = materi.singkat
    else:
        data = Pelajaran.objects.filter(id=pelajaran_id).order_by('order')[0]
        konten = data.konten
    return render(request, 'pelajaran.html', {'s_pelajaran': s_pelajaran,
                                           'materi': materi,
                                           'konten': konten,
                                           'pelajaran_aktif': pelajaran_aktif}
                  )
# Create your views here.
