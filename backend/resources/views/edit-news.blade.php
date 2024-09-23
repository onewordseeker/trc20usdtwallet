@extends('layouts.app')
    @section('content')
      
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-2 text-gray-800">SPK Edit News</h1>
                    <p class="mb-4">Update news article by filling all the information below.</p>

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">News Details</h6>
                        </div>
                        <div class="card-body">
                          <div class="text-center">
                             @if(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @elseif(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @endif
                        </div>
                          <div class="offset-md-3 col-md-6">
                           	<form action="/edit-news-post" method="post" enctype="multipart/form-data">
                              @csrf
                              <input name="id" required id="id" type="hidden" value="{{ $news->id }}" class="form-control form-control-user">

                              <div class="row justify-content-space-between card mb-2 border-left-primary" style="padding-left: 10px; border: none">
                              <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Title</label>
                                <div>
                                	<input name="title" required id="title" type="text" value="{{ $news->title }}" class="form-control form-control-user" placeholder="Enter News Title">
                            	</div>
                              </div>
                               <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Author Name</label>
                                <div>
                                	<input name="author" required id="author" type="text" value="{{ $news->author }}" class="form-control form-control-user" placeholder="Enter Author Name">
                            	</div>
                              </div>
                                 <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">News Content</label>
                                <div>
                                	<textarea name="description" required id="description" class="form-control form-control-user" placeholder="Enter News Content">{{ $news->description }}</textarea>
                            	</div>
                              </div>
                               <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">News Image URL</label>
                                <div>
                                	<input name="image" id="image" type="file" class="form-control form-control-user" placeholder="Select News Image">
                            	</div>
                                 <img src="{{ $news->image }}" style="height: 100px"/>
                              </div>
                              </div>
                              <button style="float: right" class="btn btn-primary" type="submit">
                                  Save
                              </button>
                            </form>
                          </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->
                
    <!-- Logout Modal-->
    <div class="modal fade" id="banUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to block user?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">You are blocking this user, this user will not be able to perform any action on SPK Wallet app after blocked.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" id="blockBTN" href="#">Confirm</a>
                </div>
            </div>
        </div>
    </div>

               
    <!-- Logout Modal-->
    <div class="modal fade" id="activateUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to activate user?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">You are activating this user, this user will be able to perform all actions on SPK Wallet app after importing key phrase again.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" id="activateBTN" href="#">Confirm</a>
                </div>
            </div>
        </div>
    </div>

  @endsection